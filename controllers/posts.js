const mongoose = require("mongoose");
const { PostMessage } = require("../models/postMessage");

const getPosts = async (req, res) => {
  try {
    const postMessage = await PostMessage.find();
    res.status(200).json(postMessage);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const createPost = async (req, res) => {
  const { creator, description } = req.body;
  const newPostMessage = new PostMessage({
    creator,
    description,
  });
  try {
    await newPostMessage.save();
    res.status(201).json(newPostMessage);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
const deletePost = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);
  await PostMessage.findByIdAndDelete(id);
  res.json({ message: "Post deleted succesfully!" });
};
const likePost = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);
  const post = await PostMessage.findById(id);
  const updatedPost = await PostMessage.findByIdAndUpdate(
    id,
    { likeCount: post.likeCount + 1 },
    { new: true }
  );
  res.json(updatedPost);
};
const unlikePost = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);
  const post = await PostMessage.findById(id);
  const updatedPost = await PostMessage.findByIdAndUpdate(
    id,
    { unlikeCount: post.unlikeCount + 1 },
    { new: true }
  );
  res.json(updatedPost);
};
module.exports = { getPosts, createPost, deletePost, likePost, unlikePost };
