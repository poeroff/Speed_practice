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

    // let newId;

    // if (!Post.length) {
    //   newId = 1;
    // } else {
    //   newId = Post[Post.length - 1].id + 1;
    // }

    if (!errors.isEmpty()) {
      console.log(errors.array());
      return res.status(400).json({ message: errors.array() });
    }

    try {
      await Post.create({
        title: title,
        content: content,
        Photo: Photo,
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

// 게시글 수정
exports.updatePost = [
  isAuth,
  async (req, res) => {
    const { postId } = req.params;
    const { title, content, photo } = req.body;

    // 게시글이 있는지 확인
    const index = posts.findIndex((post) => `${post.postId}` === postId);

    if (index === -1) {
      // 게시글이 없는 경우 404 에러 반환
      return res.status(404).json({ message: "존재하지 않는 게시글입니다." });
    }

    // 해당 인덱스의 게시글을 찾아 업데이트
    posts[index] = {
      ...posts[index],
      title: title || posts[index].title,
      content: content || posts[index].content,
      photo: photo || posts[index].photo,
    };

    // 업데이트된 게시글 반환
    res.status(200).json({
      message: "게시글이 성공적으로 업데이트되었습니다.",
      updatedPost: posts[index],
    });
  },
];
// 게시글 삭제!
