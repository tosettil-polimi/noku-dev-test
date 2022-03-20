const express = require("express");

const router = express.Router();
const sellController = require("../../app/controllers/monteize/sellController");

router.get("/", sellController.index);

module.exports = router;
