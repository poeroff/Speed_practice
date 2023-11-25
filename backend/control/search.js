const User = require("../model/user");

exports.searchId = async (req, res, next) => {
    const { search } = req.params;
    try {
        const searchUser = await User.findOne({ where: { nickname: search }, attributes: ["nickname"] });

        if (!searchUser) {
            return res.status(404).json({ message: "사용자를 찾을 수 없습니다." });
        }

        // return res.status(200).json({ user: searchUser });
        next();
    } catch (error) {
        return res.status(500).json({ message: "서버 오류" });
    }
};

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
        return res.status(200).json({ user: userInfo });
    } catch (error) {
        return res.status(500).json({ message: "서버 오류" });
    }
};
