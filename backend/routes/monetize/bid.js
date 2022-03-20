const express = require("express");

const router = express.Router();
const bidController = require("../../app/controllers/monteize/bidController");

router.get("/", bidController.index);

module.exports = router;
