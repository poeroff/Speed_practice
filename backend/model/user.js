const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const User = sequelize.define("users", {
    userId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    Nickname: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

module.exports = User;
