const express = require("express");
const cors = require("cors")

const app = express();

app.use(cors());
app.use(express.json());



app.get("/", (req, res, next) => {
    // 500 상태 코드를 설정하고 JSON 응답을 보냅니다.
    return res.status(500).json({ message: "에러 발생" });
});





app.listen(8080);