const User = require("../model/user");

exports.postsign = async (req, res) => {
    const { UserId, Nickname, Password, CheckPassword } = req.body;
    console.log(UserId);
    const isusername = await User.findOne({ where: { username: username } });

    if (isusername) {
        return res.status(400).json({ errorMessage: "중복된 아이디입니다." });
    }
    if (CheckPassword !== Password) {
        return res.status(400).json({ errorMessage: "비밀번호가 일치하지 않습니다." });
    }
};
