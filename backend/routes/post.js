const express = require("express");
const router = express.Router();
const Postcontrol = require("../control/post");
const Post = require("../model/post");
const { check } = require("express-validator");
const Validation = require("../middleware/validation");

router.post("/post", Postcontrol.postWrite);

module.exports = router;
