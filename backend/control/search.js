const { userInfo } = require("os");
const User = require("../model/user");
const { Op } = require("sequelize");

const Post = require("../model/post")

//유저정보 검색
exports.searchId = async (req, res, next) => {
    const { search } = req.params;
    try {
        const searchUser = await User.findAll({ where: { nickname: { [Op.like]: `%${search}%` } } });

        const searchinfo = [];

        searchUser.map((user) => {
            const userinfo = {
                userId: user.dataValues.userId,
                nickname: user.dataValues.nickname,
            };
            searchinfo.push(userinfo);
        });
        if (!searchUser) {
            return res.status(404).json({ message: "사용자를 찾을 수 없습니다." });
        }
        res.status(200).json({searchinfo})
        next();
        
    } catch (error) {
        return res.status(500).json({ message: "서버 오류" });
    }
};

//검색 후 가져오기
exports.searchInfo = async (req, res) => {
    const { search } = req.params;
    try {
        const userInfo = await User.findOne({
            where: { userId: search },
            
        });
        console.log(search)

        const post = await Post.findAll({where : {userId : search}})
        const postCount =  await Post.count({where : { userId :search}})
     
    
      
    
      
        console.log(postCount)
       
        if (!userInfo) {
            return res.status(404).json({ message: "사용자를 찾을 수 없습니다." ,  });
        }
        return res.status(200).json({ nickname : userInfo.nickname ,  description : userInfo.description, imageurl : userInfo.imageurl , post, postCount : postCount});
    } catch (error) {
        return res.status(500).json({ message: "서버 오류" });
    }
};
