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

// export const updatePost = async (req, res) => {
//   const { id: _id } = req.params;
//   const { body } = req;

//   if (!mongoose.Types.ObjectId.isValid(_id))
//     return res.send("No post with that id");

//   const updatedPost = await Posts.findByIdAndUpdate(_id, body, { new: true });
//   res.json(updatedPost);
// };

export const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, message, creator, selectedFile, tags } = req.body;
  console.log(req.body);

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

  await Posts.findByIdAndUpdate(id, updatedPost, { new: true });

  res.json(updatedPost);
};
