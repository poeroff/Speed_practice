const jwt = require("jsonwebtoken");
const User = require("../model/user");

exports.isAuth = (req, res, next) => {
  const { authorization } = req.headers;
 

  const [authType, authToken] = (authorization || "").split(" ");
  

  if (!authToken || authType !== "Bearer") {
    res.status(400).send({
      errorMessage: "로그인 후 이용 가능한 기능입니다.",
    });
    return;
  }

  try {
    const user = jwt.verify(authToken, "wow");
  
   
    res.locals.user = user.Id;
   
    next();
  } catch (err) {
    res.status(400).send({
      errorMessage: "로그인 후 이용 가능한 기능1입니다.",
    });
  }
};
