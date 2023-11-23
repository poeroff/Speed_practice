const express = require("express");
const cors = require("cors");
<<<<<<< HEAD
const authRouter = require("./routes/auth");
const userRouter = require("./routes/user")
=======
const UserRouter = require("./routes/auth");
const PostRouter = require("./routes/post");
>>>>>>> 60404cb03813137cee0a5efae4cfd4055418b4fc
const app = express();
const bcrypt = require("bcrypt");
const sequelize = require("./util/database");


const User = require("./model/user");
const post = require("./model/post");
// const comment = require("./model/comments");

app.use(cors());
app.use(express.json());
<<<<<<< HEAD
app.use(authRouter);
app.use(userRouter);
=======
app.use(UserRouter);
app.use(PostRouter);
>>>>>>> 60404cb03813137cee0a5efae4cfd4055418b4fc
sequelize.sync().then((result) => {
    console.log("8080번 포트에 연결이 성공하였습니다");
    app.listen(8080);
});
