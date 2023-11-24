const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const User = sequelize.define("users", {

    userId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    accountId: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    nickname: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true,
    },
});

module.exports = User;
