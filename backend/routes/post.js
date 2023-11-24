const express = require("express");
const router = express.Router();
const Postcontrol = require("../control/post");
const Post = require("../model/post");
const { check } = require("express-validator");
const Validation = require("../middleware/validation");

// 이미지 불러오는 라우터
router.get("/images/:filename", Postcontrol.getImage);
router.post("/post", Postcontrol.postWrite);
router.put("/update/:postId", Postcontrol.updatePost);
router.delete("/post/:postId", Postcontrol.deletePost);
router.get("/post", Postcontrol.getPostList);
router.get("/post/:postId", Postcontrol.getWrite);

module.exports = router;
