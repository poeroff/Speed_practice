const express = require("express");
const router = express.Router();
const userControl = require("../control/user");

router.get("/userSearch", userControl.userSearch);
router.post("/userUpdate", userControl.userUpdate);

module.exports = router;