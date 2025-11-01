import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
app.use(cors());
import express from "express";
import connectDB from "./Config/db.js";
import userRoutes from "./routes/userRoutes.js";

connectDB();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
