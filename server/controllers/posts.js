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
  console.log(body);
};

export const updatePost = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.send("No post with that id");

  const updatedPost = await Posts.findByIdAndUpdate(id, body, { new: true });
  res.json(updatedPost);
};

export const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.send("No post with that id");

  await Posts.findByIdAndRemove(id);

  res.json({ message: "deleted succesfuly" });
};

export const likePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.send("No post with that id");

  const post = await Posts.findById(id);
  const updatedPost = await Posts.findByIdAndUpdate(
    id,
    { likeCount: post.likeCount + 1 },
    { new: true }
  );
  console.log("liked");

  res.json(updatedPost);
};
