const express = require("express");
const router = express.Router();

const ScoresController = require("../controllers/scores");

router.post("/", ScoresController.Create);

module.exports = router;
