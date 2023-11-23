const sequelize = require("../util/database");
const Sequelize = require("sequelize");
const User = require("./user");
const Post = require("./post");

const Comment = sequelize.define("comments", {
    commentId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    Content: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

Comment.belongsTo(User, { foreignKey: "userId", as: "commenterUser" });
Comment.belongsTo(Post, { foreignKey: "postId", as: "commenterPost" });

module.exports = Comment;
