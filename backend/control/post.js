const Post = require("../model/post");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const { isAuth } = require("../middleware/validation");
const path = require("path");
const User = require("../model/user");
const sequelize = require("../util/database");

// 게시글 작성
exports.postWrite = [
  isAuth,
  async (req, res) => {
    const content = req.body.content;
    const image = req.file.path;
    const user = await User.findOne({ where: { userId: res.locals.user } });
    console.log(user.nickname);
    console.log(res.locals.user);

    try {
      await Post.create({
        content: content,
        image: image,
        Like: 0,
        userId: res.locals.user,
        nickname: user.nickname,
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

// 이미지 불러오기.

exports.getImage = async (req, res) => {
  const filename = req.params.filename;
  const imagePath = path.join(__dirname, "uploads", filename);

  res.sendFile(imagePath);
};

// 게시글 전체 리스트

exports.getPostList = async (req, res) => {
  try {
    const posts = await Post.findAll({
      //  [sequelize.literal('RAND()')], // RAND() 함수를 사용 랜덤으로 정렬하기 findAll한 함수에서 해당 함수를 이용하여 랜덤으로. googling 결과 sequelize.literal('RAND()) 오류 발생으로 order: sequleize.literal("rand()")로 코드수정
      order: sequelize.literal("RAND()"),
    });
    // 게시글 이미지 경로
    const postsWithImagePaths = posts.map((post) => ({
      postId: post.postId,
      title: post.nickname,
      content: post.content,
      imagePath: post.image ? `/image/${path.basename(post.image)}` : null,
    }));
   

    res.status(200).json(postsWithImagePaths);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "서버 오류로 인하여 조회할 수 없습니다." });
  }
};

// 특정 게시글 조회
exports.getWrite = async (req, res) => {
  const postId = req.params.postId;
  try {
    const post = await Post.findByPk(postId);
    if (!post) {
      return res.status(404).json({ message: "게시글을 찾을 수 없습니다." });
    }
    // 이미지 파일의 경로 추가하기.
    let imagePath;
    if (post.image) {
      imagePath = `/images/${path.basename(post.image)}`;
    } else {
      imagePath = null;
    }
    return res.status(200).json({
      content: post.content,
      imagePath: imagePath,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "서버 오류" });
  }
};

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
    console.log("hello")

    // 게시글 위치 확인
    const post = await Post.findAll();

    const index = post.findIndex((post) => `${post.postId}` === postId);

    if (index === -1) {
      // 게시글이 없는 경우 404 에러 반환
      return res.status(404).json({ message: "존재하지 않는 게시글입니다." });
    } else {
      const imagePath = post.image;

      await post[index].destroy();

      if (imagePath) {
        const fullPath = path.join(__dirname, "..", "image", imagePath);

        try {
          await fs.unlink(fullPath);
          console.log("이미지 삭제 완료");
        } catch (error) {
          console.error("삭제 중 오류발생하였음", error);
        }
      }
      res.send({ message: " 게시글이 삭제 되었습니다." });
    }
  },
];
