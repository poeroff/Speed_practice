const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");

const UserRouter = require("./routes/auth");
const PostRouter = require("./routes/post");

const searchRouter = require("./routes/search");

const app = express();
const bcrypt = require("bcrypt");
const sequelize = require("./util/database");

const User = require("./model/user");
const post = require("./model/post");
// const comment = require("./model/comments");

const date = new Date();
const formattedDate = date.toISOString().replace(/:/g, "-").replace(/\..+/, "");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "image");
  },
  filename: (req, file, cb) => {
    cb(null, formattedDate + "-" + file.originalname);
  },
});
app.use(multer({ storage: storage }).single("image"));
app.use("/image", express.static(path.join(__dirname, "image")));

app.post("/images", (req, res) => {
  console.log(req.file);
});
app.use(cors());

app.use(express.json());

app.use(authRouter);
app.use(userRouter);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(UserRouter);
app.use(PostRouter);
app.use(searchRouter);

sequelize.sync().then((result) => {
  console.log("8080번 포트에 연결이 성공하였습니다");
  app.listen(8080);
});
