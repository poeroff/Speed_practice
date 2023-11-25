const User = require("../model/user");
const { Op } = require('sequelize');

exports.searchId = async (req, res) => {
    const { search } = req.params;
    try {
        
        const searchUser = await User.findAll({ where: { nickname:  {[Op.like]: `%${search}%`} },  });
       
        const searchinfo = []
        
        searchUser.map(user=>{
            const userinfo = {
                userId :user.dataValues.userId,
                nickname :user.dataValues.nickname
            }
            searchinfo.push(userinfo)  
        })
        if (!searchUser) {
            return res.status(404).json({ message: "사용자를 찾을 수 없습니다." });
        }
        return res.status(200).json({ searchinfo });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "서버 오류" });
    }
};
