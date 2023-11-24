const express = require("express");
const router = express.Router();
const userControl = require("../control/user");

router.get("/userSearch/:userId", userControl.userSearch);
router.put("/userUpdate/:userId", userControl.userUpdate);

module.exports = router;