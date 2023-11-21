const express = require("express");
const cors = require("cors")

const app = express();

const sequelize = require("./util/database")

app.use(cors());
app.use(express.json());







sequelize.sync().then((result) => {
    console.log("8080번 포트에 연결이 성공하였습니다");
    app.listen(8080);
  });