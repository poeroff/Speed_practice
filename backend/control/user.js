const User = require("../model/user");
const { isAuth } = require("../middleware/validation");



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
                description:findUser.description,
                imageurl : findUser.imageurl
                // 기타 원하는 사용자 정보를 추가할 수 있음
            };
            
           
            return res.status(200).json({ user });
        } catch (error) {
            // 예외 처리
            console.error(error);
            return res.status(500).json({ message: "서버 오류" });
        }
    },
];

// 회원 이름 설명 정보 수정
exports.userUpdate = [isAuth, async (req, res) => {
  const { nickname, description } = req.body;
  console.log(nickname)
 

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
      
      description: findUser.description
      // 기타 원하는 사용자 정보를 추가할 수 있음
    };
  

    
    findUser.description = description || findUser.description;

    await findUser.save();

    res.status(200).json({ userUpdate: findUser });
  } catch (error) {
    // 예외 처리
    console.error(error);
    res.status(500).json({ message: "서버 오류" });
  }
}];


//마이페이지 이미지 업데이트


exports.postimg = [isAuth, async (req, res) => {
  const imageurl = req.file.path;
  const user = await User.findOne({where : {userId  : res.locals.user}})
  await user.update({
    imageurl : imageurl
  })
}];