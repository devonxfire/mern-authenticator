import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { connectDB } from "./config/db.js";
import userRoutes from "./routes/user.route.js";

connectDB();

const app = express();

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

app.use("/api/user", userRoutes);
