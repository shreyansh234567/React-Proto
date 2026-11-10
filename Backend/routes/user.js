import express from "express";
import {
  allUsers,
  deleteUser,
  login,
  signup,
  updateUser,
} from "../controller/user.js";
import authMiddleware from "../middleware/auth.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/getUser", allUsers);
router.put("/update/:id", authMiddleware, updateUser);
router.delete("/delete/:id", authMiddleware, deleteUser);

export default router;
