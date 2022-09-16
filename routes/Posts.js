import express from "express";

import { getPosts, getPost, getPostsBySearch, createPosts, updatePost, deletePost, likePost, commentPost} from "../controllers/Posts.js"; 

import auth from "../middleware/Auth.js";
const router = express.Router();

router.get("/search", getPostsBySearch);
router.get("/", getPosts);
router.get("/:id", getPost);

router.post("/", auth, createPosts);
router.patch("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);
router.patch("/:id/likePost", auth, likePost);
router.post("/:id/commentPost", auth, commentPost);

export default router;
