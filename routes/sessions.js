const express = require("express");
const router = express.Router();

const SessionsController = require("../controllers/sessions");

router.get("/", SessionsController.Index);
router.post("/", SessionsController.Create);

module.exports = router;
