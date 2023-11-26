const express = require("express");
const router = express.Router();
const searchControl = require("../control/search");

router.get("/:search", searchControl.searchId);
router.get("/mypage/:search", searchControl.searchInfo);

module.exports = router;
