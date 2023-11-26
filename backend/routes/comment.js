const express = require("express");
const router = express.Router();
const Commentscontrol = require("../control/comment");

const { check } = require("express-validator");
const Validation = require("../middleware/validation");

router.post("/comment", Commentscontrol.commentWrite);
router.put("/commentupdate/:commentId", Commentscontrol.updateComment);
router.delete("/comment/:commentId", Commentscontrol.deleteComment);
router.get("/comment/:postId", Commentscontrol.getCommentsList);

module.exports = router;
