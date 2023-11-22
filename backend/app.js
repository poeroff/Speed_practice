const express = require("express");
const cors = require("cors");
const UserRouter = require("./routes/auth");
const app = express();
const jwt = require("jsonwebtoken");

const sequelize = require("./util/database");

app.use(cors());
app.use(express.json());
app.use(UserRouter);

sequelize.sync().then((result) => {
    console.log("8080번 포트에 연결이 성공하였습니다");
    app.listen(8080);
});
