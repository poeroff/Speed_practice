const express = require("express");
const router = express.Router();
const Commentscontrol = require("../control/comment");
const Comments = require("../model/comment");
const { check } = require("express-validator");
const Validation = require("../middleware/validation");

router.post("/post", Commentscontrol.commenttWrite);
router.put("/update/:commentId", Commentscontrol.updateComment);
router.delete("/post/:commentId", Commentscontrol.deleteComment);
router.get("/post/:postId", Commentscontrol.getCommentList);

module.exports = router;
