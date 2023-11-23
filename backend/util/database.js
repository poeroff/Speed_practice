const Sequelize = require("sequelize");

const sequelize = new Sequelize("database", "admin", "wqdsdsf123", {
  dialect: "mysql",
  host: "speed.cthngt3fulux.us-east-1.rds.amazonaws.com",
  port: 3306,
});

//테이블 이름 , 사용자 유저 이름 , 테이블 패스워드 , sql 종류 , host , port번호

module.exports = sequelize;
