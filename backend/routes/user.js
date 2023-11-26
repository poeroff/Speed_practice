const express = require("express");
const router = express.Router();
const userControl = require("../control/user");

router.get("/userSearch/:userId", userControl.userSearch);
router.put("/userUpdate/:userId", userControl.userUpdate);
router.get("/userPostList/:userId", userControl.userPostList);

module.exports = router;