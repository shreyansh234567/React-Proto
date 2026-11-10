import jwt from "jsonwebtoken";
import User from "../models/user.js";

export const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    console.log(username, email, password);

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User Already Registered",
      });
    }

    const user = await User.create({
      username,
      email,
      password,
    });
    return res.status(200).json({
      message: "User signup",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      errors: error.message,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(401).json({
        message: "Invalid credentials ",
      });
    }

    const token = jwt.sign(
      {
        userId: user._id,
      },
      process.env.JWT_SECRET,
    );

    return res.status(200).json({
      mesage: "User loged IN ",
      token,
    });
  } catch (error) {
    return res.status(500).json({
      errors: error.message,
    });
  }
};

export const allUsers = async (req, res) => {
  try {
    const users = await User.find().sort({
      createdAt: -1,
    });

    return res.status(200).json({
      count: users.length,
      users,
    });
  } catch (error) {
    return res.status(500).json({
      errors: error.message,
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { name, password } = req.body;

    const user = await User.findOneAndUpdate(
      {
        _id: req.user.userId,
      },

      { name, password },
      { new: true },
    );
    if (!user) {
      return res.status(404).json({
        messge: " User not found",
      });
    }

    return res.status(200).json({
      message: "User updated",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      errors: error.message,
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await User.findOneAndDelete({
      _id: req.user.userId,
    });

    if (!user) {
      return res.status(404).json({
        message: " User not found",
      });
    }

    return res.status(200).json({
      message: "User deleted Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      errors: error.message,
    });
  }
};
