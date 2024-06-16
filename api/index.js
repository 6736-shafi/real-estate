import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import userRoutser from "./routes/user.route.js";
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


app.listen(port, () => {
  console.log(`the Server is running at http://localhost:${port}`);
});
app.use("/api/user", userRoutser);
