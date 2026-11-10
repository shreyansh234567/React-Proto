import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import userRoutes from "./routes/user.js";
//import todoRoutes from "./routes/todo.js";
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors())
app.use(express.json());
app.use("/user", userRoutes);
//app.use("/todo", todoRoutes);

try {
  await mongoose.connect(process.env.MONGO_URI);
  console.log(" ✅ MongoDB Connected");

  app.listen(port, () => {
    console.log(`Server is running on port localhost:${port}`);
  });
} catch (error) {
  console.log(error.message);
}
