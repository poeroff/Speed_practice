const express = require("express");
const router = express.Router();
const Authcontrol = require("../control/auth");

router.post("/signup", Authcontrol.postsign);
module.exports = router;
