import mongoose from "mongoose";
import Posts from "../models/Post.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await Posts.find();
    res.json(posts);
  } catch (e) {
    res.json(e.message);
  }
};

export const createPosts = async (req, res) => {
  const { body } = req;
  const newPost = new Posts(body);
  try {
    await newPost.save();
    res.json(newPost);
  } catch (e) {
    res.json(e.message);
  }
};

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const { body } = req;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.send("No post with that id");
  try {
    const updatedPost = await Posts.findByIdAndUpdate(_id, body, { new: True });
    res.json(updatePost);
  } catch (e) {
    res.json(e.message);
  }
};
