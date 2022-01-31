import express, { Router } from "express";
import {
  getPosts,
  createPost,
  deletePost,
  likePost,
  unlikePost,
} from "../controllers/posts.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/", createPost);
router.delete("/:id", deletePost);
router.patch("/:id/likePost", likePost);
router.patch("/:id/unlikePost", unlikePost);
export default router;
