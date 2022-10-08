import mongoose from "mongoose";
import Users from "../models/user.js";
import jwt from "jsonwebtoken";

const maxAge = 3 * 24 * 60 * 60;

const createToken = (id) => {
  return jwt.sign({ id }, "super secret key", {
    expiresIn: maxAge,
  });
};

export const register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Users.create({ email, password });
    const token = createToken(user._id);
    res.cookie("jwt", token, {
      withCrdentials: true,
      httpOnly: true,
      maxAge: maxAge * 1000,
    });
    res.json(user);
  } catch (error) {
    console.log(error);
  }
};
