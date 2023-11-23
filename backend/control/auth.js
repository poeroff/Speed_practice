const User = require("../model/user");
const jwt = require("jsonwebtoken");

const { validationResult } = require("express-validator");
const { isAuth } = require("../middleware/validation");

//회원가입
exports.postsign = async (req, res) => {
    const { UserId, Nickname, Password } = req.body;
   
    const error = validationResult(req);
    if (!error.isEmpty()) {
        console.log(error.array());
        return res.status(200).json({ message: error.array() });
    }
    await User.create({ accountId: UserId, nickname: Nickname, password: Password });
    return res.status(200).json({ message: [] });
    // const isusername = await User.findOne({ where: { username: username } });

    // if (isusername) {
    //     return res.status(400).json({ errorMessage: "중복된 아이디입니다." });
    // }
    // if (CheckPassword !== Password) {
    //     return res.status(400).json({ errorMessage: "비밀번호가 일치하지 않습니다." });
    // }
};

//로그인
exports.postlogin = async (req, res) => {
    const { UserId, Password } = req.body;
    
    const finduser = await User.findOne({ where: { accountId: UserId } });
    console.log(finduser);

    if (!finduser) {
        return res.status(400).json({ errorMessage: "아이디가 일치하지 않습니다." });
    }
    if (Password !== finduser.password) {
        return res.status(400).json({ errorMessage: "패스워드가 일치하지 않습니다." });
    }
    const accessToken = jwt.sign({ Id: finduser.userId }, "wow", { expiresIn: "12h" });
    return res.status(200).json({ accessToken: "Bearer " + accessToken, message: "로그인 성공!" });
};


// 회원 정보 조회
exports.userSearch = [isAuth, async (req, res) => {
    try {
      const { userId } = req.params;
  
      // 사용자를 데이터베이스에서 찾음
      const findUser = await User.findOne({ where: { userId: userId } });
  
      if (!findUser) {
        // 사용자를 찾지 못한 경우
        return res.status(404).json({ message: "사용자를 찾을 수 없습니다." });
      }
  
      // 사용자를 찾은 경우 해당 사용자의 정보 반환
      const user = {
        accountId: findUser.accountId,
        nickname: findUser.nickname,
        // 기타 원하는 사용자 정보를 추가할 수 있음
      };
  
      return res.status(200).json({ user });
    } catch (error) {
      // 예외 처리
      console.error(error);
      return res.status(500).json({ message: "서버 오류" });
    }
  }];


// 회원 정보 수정
exports.userCorrection = async (req, res) => {
    const { authorization } = req.headers;
    const { Nickname, Password } = req.body;

    const [authType, authToken] = (authorization || "").split(" ");

    if(authToken && authType === "Bearer") {
        const Id = jwt.verify(authToken, "wow");
        res.locals.user = Id;

        const finduser = await User.findOne({ where: { accountId: Id } });

        return res.status(200).json({ message: [] });
    }
}