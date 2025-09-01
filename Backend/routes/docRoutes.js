const express = require("express");
const { uploadDoc, getScore } = require("../controllers/docController");
const router = express.Router();

router.post("/upload", uploadDoc);
router.get("/score/:docId", getScore);

module.exports = router;
const express = require("express");
const { uploadDocument } = require("../controllers/docController");
const upload = require("../middleware/uploadMiddleware");
const authMiddleware = require("../middleware/authMiddleware");

// POST /api/docs/upload
router.post("/upload", authMiddleware, upload.single("document"), uploadDocument);

module.exports = router;
