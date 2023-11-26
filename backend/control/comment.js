const Comments = require("../model/comments")
const Post = require("../model/post");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const { isAuth } = require("../middleware/validation");
const User = require("../model/user")


// 댓글 작성
exports.commentWrite = [
    isAuth,
    async (req, res) => {
      const content = req.body.content;

      const postId = req.body.postId;
      console.log(postId)
      console.log(res.locals.user)
      
  
      try {
        await Comments.create({
          Content: content,
          userId : res.locals.user,
          postId : postId,
        });
  
        return res.status(200).json({ message: "댓글이 성공적으로 생성되었습니다." });
      } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "내부 서버 오류" });
      }
    },
  ];

// 댓글 조회
exports.getCommentsList = async (req, res) => {
    const { postId } = req.params;
    

    try {
      const comments = await Comments.findAll( { where: { postId: postId } } );
     


      if(!comments){
        throw new Error("댓글 없음")
        
      }
      const commentsList = comments.map((comments) => ({
        Content : comments.Content,
        commentId : comments.commentId,
      }));
      console.log(commentsList)
    
  
      res.status(200).json({commentsList});
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "서버 오류로 인하여 조회할 수 없습니다." });
    }
  };

// 댓글 수정
exports.updateComment = [
    isAuth,
    async (req, res) => {
      const { commentId } = req.params;
      const { content } = req.body;
  
      try {
        const comments = await Comments.findAll();
  
        const index = comments.findIndex((comment) => `${comment.commentId}` === commentId);
  
        if (index === -1) {
          return res.status(404).json({ message: "존재하지 않는 게시글입니다." });
        }
  
        comments[index].content = content || comments[index].content;

        await comments[index].save();

        res.status(200).json({
          message: "게시글이 성공적으로 업데이트되었습니다.",
          updatedPost: comments[index],
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "서버 오류가 발생했습니다." });
      }
    },
];

// 댓글 삭제
exports.deleteComment = [
    isAuth,
    async (req, res) => {
      const { commentId } = req.params;

      const comments = await Comments.findAll();
      const index = comments.findIndex((comment) => `${comment.commentId}` === commentId);
  
      if (index === -1) {
        return res.status(404).json({ message: "존재하지 않는 게시글입니다." });
      } else {

        await comments[index].destroy();
        res.send({ message: " 게시글이 삭제 되었습니다." });
      }
    },
  ];