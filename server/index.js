import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

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
