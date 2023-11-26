const User = require("../model/user");
const Post = require("../model/post");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const { isAuth } = require("../middleware/validation");
const path = require("path");

// 회원 정보 조회
exports.userSearch = [
    isAuth,
    async (req, res) => {
        try {
            // 사용자를 데이터베이스에서 찾음
            const findUser = await User.findOne({ where: { userId: res.locals.user } });

            if (!findUser) {
                // 사용자를 찾지 못한 경우
                return res.status(404).json({ message: "사용자를 찾을 수 없습니다." });
            }

            // 사용자를 찾은 경우 해당 사용자의 정보 반환
            const user = {
                // accountId: findUser.accountId,
                nickname: findUser.nickname,
                description: findUser.description,
                // 기타 원하는 사용자 정보를 추가할 수 있음
            };
            console.log(user);

            return res.status(200).json({ user });
        } catch (error) {
            // 예외 처리
            console.error(error);
            return res.status(500).json({ message: "서버 오류" });
        }
    },
];

// 회원 정보 수정
exports.userUpdate = [isAuth, async (req, res) => {
  const { nickname, description } = req.body;

  try {
    // 사용자를 데이터베이스에서 찾음
    const findUser = await User.findOne({ where: { userId: res.locals.user } });

    if (!findUser) {
      // 사용자를 찾지 못한 경우
      return res.status(404).json({ message: "사용자를 찾을 수 없습니다." });
    }

    // 사용자를 찾은 경우 해당 사용자의 정보 반환
    const user = {
      // accountId: findUser.accountId,
      nickname: findUser.nickname,
      description: findUser.description
      // 기타 원하는 사용자 정보를 추가할 수 있음
    };
    console.log(user);

    findUser.nickname = nickname || findUser.nickname;
    findUser.description = description || findUser.description;

    await findUser.save();

    res.status(200).json({ userUpdate: findUser });
  } catch (error) {
    // 예외 처리
    console.error(error);
    res.status(500).json({ message: "서버 오류" });
  }
}];

// 사용자 게시글 조회
exports.userPostList = [isAuth, async (req, res) => {
  try {
    const posts = await Post.findAll( { where: { userId: res.locals.user } } );

    const postsWithImagePaths = posts.map((post) => ({
      content: post.content,
      imagePath: post.image ? `/images/${path.basename(post.image)}` : null,
    }));

    res.status(200).json(postsWithImagePaths);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "서버 오류로 인하여 조회할 수 없습니다." });
  }
}];