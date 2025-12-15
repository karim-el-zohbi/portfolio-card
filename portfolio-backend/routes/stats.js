const express = require("express");
const router = express.Router();
const Message = require("../models/Message");
const Project = require("../models/Project");

router.get("/", async (req, res) => {
  try {
    const totalMessages = await Message.countDocuments();
    const totalProjects = await Project.countDocuments();
    return res.json({ totalMessages, totalProjects });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "server error" });
  }
});

module.exports = router;
