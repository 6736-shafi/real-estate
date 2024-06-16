import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.route.js";
import authRouter from './routes/auth.route.js';
dotenv.config();
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error(err);
  });

const app = express();
const port = 3000;

app.use(express.json())
app.listen(port, () => {
  console.log(`the Server is running at http://localhost:${port}`);
});
app.use("/api/user", userRouter);
app.use('/api/auth', authRouter);
