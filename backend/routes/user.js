const express = require("express");
const router = express.Router();
const userControl = require("../control/user");

router.get("/userSearch", userControl.userSearch);
router.put("/userUpdate", userControl.userUpdate);
router.put("/userimg",userControl.postimg)
module.exports = router;