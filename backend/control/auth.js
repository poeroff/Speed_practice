const User = require("../model/user");

const {validationResult} = require("express-validator");

exports.postsign = async (req, res) => {
    const { UserId, Nickname, Password } = req.body;
   
    const error = validationResult(req);
    if(!error.isEmpty()){
        console.log(error.array())
        return res.status(200).json({message : error.array()})
    }
    await User.create({userIdname: UserId, Nickname : Nickname, Password : Password})
    return res.status(200).json({message : []})
    // const isusername = await User.findOne({ where: { username: username } });

    // if (isusername) {
    //     return res.status(400).json({ errorMessage: "중복된 아이디입니다." });
    // }
    // if (CheckPassword !== Password) {
    //     return res.status(400).json({ errorMessage: "비밀번호가 일치하지 않습니다." });
    // }
};
