const Post = require("../model/post");
const jwt = require("jsonwebtoken");

const { validationResult } = require("express-validator");
const { isAuth } = require("../path-to-your-isAuth-middleware");
// 게시글 조회

// 게시글 작성
exports.postWrite = [
  isAuth,
  async (req, res) => {
    const { title, content, photo } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors.array());
      return res.status(400).json({ message: errors.array() });
    }

    try {
      await Post.create({ title: title, content: content, photo: photo });
      return res
        .status(200)
        .json({ message: "게시물이 성공적으로 생성되었습니다." });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "내부 서버 오류" });
    }
  },
];
