const Post = require("../model/post");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const { isAuth } = require("../middleware/validation");

// 게시글 전체 리스트

exports.getPostList = async (req, res) => {
  const result = await Post.findAll();
  res.status(200).json(result);
};

// 특정 게시글 조회
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
    const content = req.body.content;
    const image = req.file.path;
    console.log(content, image);

    try {
      await Post.create({
        content: content,
        image: image,
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
    const { content, image } = req.body;

    try {
      // 게시글이 있는지 확인
      const posts = await Post.findAll();

      const index = posts.findIndex((post) => `${post.postId}` === postId);

      if (index === -1) {
        // 게시글이 없는 경우 404 에러 반환
        return res.status(404).json({ message: "존재하지 않는 게시글입니다." });
      }

      // 해당 인덱스의 게시글을 찾아 업데이트

      posts[index].content = content || posts[index].content;
      posts[index].photo = photo || posts[index].photo;

      // 업데이트된 게시글을 데이터베이스에 저장
      await posts[index].save();

      // 업데이트된 게시글 반환
      res.status(200).json({
        message: "게시글이 성공적으로 업데이트되었습니다.",
        updatedPost: posts[index],
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "서버 오류가 발생했습니다." });
    }
  },
];
// 게시글 삭제!

exports.deletePost = [
  isAuth,
  async (req, res) => {
    const { postId } = req.params;
    // 게시글 위치 확인
    const posts = await Post.findAll();
    const index = posts.findIndex((post) => `${post.postId}` === postId);

    if (index === -1) {
      // 게시글이 없는 경우 404 에러 반환
      return res.status(404).json({ message: "존재하지 않는 게시글입니다." });
    } else {
      //   index.splice(index, 1);

      await posts[index].destroy();
      res.send({ message: " 게시글이 삭제 되었습니다." });
    }
  },
];
