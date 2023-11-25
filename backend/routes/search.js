const express = require("express");
const router = express.Router();
const searchControl = require("../control/search");

router.get("/:search", searchControl.searchId, searchControl.searchInfo);
// router.get("/hi");

module.exports = router;
