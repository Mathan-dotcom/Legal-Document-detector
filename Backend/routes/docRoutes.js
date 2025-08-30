const express = require("express");
const { uploadDoc, getScore } = require("../controllers/docController");
const router = express.Router();

router.post("/upload", uploadDoc);
router.get("/score/:docId", getScore);

module.exports = router;
