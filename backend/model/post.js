const sequelize = require("../util/database");
const Sequelize = require("sequelize");
const User = require("./user");

const Post = sequelize.define("posts", {
    postId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    Title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Content: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

Post.belongsTo(User, { foreignKey: "userId", as: "poster" });

module.exports = Post;
