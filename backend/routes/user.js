const express = require("express");
const router = express.Router();
const userControl = require("../control/user");
const User = require("../model/user");
const { check } = require("express-validator");
const Validation = require("../middleware/validation");

router.get("/userSearch/:userId", userControl.userSearch);
router.put("/userUpdate/:userId", userControl.userUpdate);

module.exports = router;