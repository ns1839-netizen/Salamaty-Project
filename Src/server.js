import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectDB from "./Config/db.js";
import userRoutes from "./routes/userRoutes.js";

connectDB();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
