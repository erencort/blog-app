import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import postRouters from "./routes/post.js";
import userRouters from "./routes/user.js";

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

app.use("/posts", postRouters);
app.use("", userRouters);

const PORT = process.env.PORT || 5000;
const CONNECTION_URL = process.env.CONNECTION_URL;
mongoose
  .connect(CONNECTION_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server running on ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
