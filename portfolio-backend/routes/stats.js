import express from "express";
import Message from "../models/Message.js";
import Project from "../models/Project.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const totalMessages = await Message.countDocuments();
    const totalProjects = await Project.countDocuments();

    res.json({
      totalMessages,
      totalProjects,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
