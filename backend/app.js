const express = require("express");
const cors = require("cors");

const app = express();

const sequelize = require("./util/database");

const user = require("./model/user")
const post = require("./model/post")
const comments = require("./model/comments")

app.use(cors());
app.use(express.json());

app.post("/", (req, res, next) => {
    console.log("dds");
});

sequelize.sync().then((result) => {
    console.log("8080번 포트에 연결이 성공하였습니다");
    app.listen(8080);
});
