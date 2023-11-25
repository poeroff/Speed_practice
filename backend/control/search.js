const { userInfo } = require("os");
const User = require("../model/user");
const { Op } = require("sequelize");

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
            where: { nickname: search },
            attributes: ["nickname", "description"],
        });
        if (!userInfo) {
            return res.status(404).json({ message: "사용자를 찾을 수 없습니다." });
        }
        return res.status(200).json({ userInfo });
    } catch (error) {
        return res.status(500).json({ message: "서버 오류" });
    }
};
