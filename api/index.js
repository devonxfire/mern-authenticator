import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { connectDB } from "./config/db.js";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import cors from "cors";
connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({ success: false, message, statusCode });
});
