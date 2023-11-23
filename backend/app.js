const express = require("express");
const cors = require("cors");

const authRouter = require("./routes/auth");
const userRouter = require("./routes/user")

const UserRouter = require("./routes/auth");
const PostRouter = require("./routes/post");

const app = express();
const bcrypt = require("bcrypt");
const sequelize = require("./util/database");


const User = require("./model/user");
const post = require("./model/post");
// const comment = require("./model/comments");

app.use(cors());
app.use(express.json());

app.use(authRouter);
app.use(userRouter);

app.use(UserRouter);
app.use(PostRouter);

sequelize.sync().then((result) => {
    console.log("8080번 포트에 연결이 성공하였습니다");
    app.listen(8080);
});
