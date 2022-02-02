const express = require("express");
const { Router } = require("express");
const { model } = require("mongoose");
const {
  getPosts,
  createPost,
  deletePost,
  likePost,
  unlikePost,
} = require("../controllers/posts");

const router = express.Router();

router.get("/", getPosts);
router.post("/", createPost);
router.delete("/:id", deletePost);
router.patch("/:id/likePost", likePost);
router.patch("/:id/unlikePost", unlikePost);
module.exports = router;
