const express = require("express");
const router = express.Router();
const userControl = require("../control/user");

router.get("/userSearch", userControl.userSearch);

module.exports = router;