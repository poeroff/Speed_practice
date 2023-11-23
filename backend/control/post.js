const Post = require("../model/post");
const jwt = require("jsonwebtoken");

const { validationResult } = require("express-validator");
const { isAuth } = require("../middleware/validation");

// 게시글 조회
exports.getWrite = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "서버 오류" });
  }
};

// 게시글 작성
exports.postWrite = [
  isAuth,
  async (req, res) => {
    const { title, content, Photo } = req.body;

    const errors = validationResult(req);

    let newId;

    if (!Post.length) {
      newId = 1;
    } else {
      newId = Post[Post.length - 1].id + 1;
    }

    if (!errors.isEmpty()) {
      console.log(errors.array());
      return res.status(400).json({ message: errors.array() });
    }

    try {
      await Post.create({
        title: title,
        content: content,
        Photo: Photo,
        postId: newId,
      });

      return res
        .status(200)
        .json({ message: "게시물이 성공적으로 생성되었습니다." });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "내부 서버 오류" });
    }
  },
];
