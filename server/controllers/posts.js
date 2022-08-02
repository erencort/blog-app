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
  const body = req.body;
  const newPost = new Posts(body);
  try {
    await newPost.save();
    res.json(newPost);
  } catch (e) {
    res.json(e.message);
  }
};
