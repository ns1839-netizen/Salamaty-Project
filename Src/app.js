import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import connectDB from "./Config/db.js";
import userRoutes from "./routes/userRoutes.js";

connectDB();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

// Start server
app.listen(port, () => {
  console.log(` Server is running on port ${port}`);
});
