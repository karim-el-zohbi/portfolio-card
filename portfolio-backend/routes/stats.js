import express from "express";
import Stat from "../models/Stat.js";
import Project from "../models/Project.js";
import Message from "../models/Message.js";
import adminAuth from "../middleware/adminAuth.js";

const router = express.Router();

router.get("/", adminAuth, async (req, res) => {
  try {
    const totalVisits = await Stat.aggregate([
      { $group: { _id: null, total: { $sum: "$count" } } },
    ]);

    const mostVisitedProject = await Stat.find({
      page: { $regex: /^project:/ },
    })
      .sort({ count: -1 })
      .limit(1);

    res.json({
      totalVisits: totalVisits[0]?.total || 0,
      totalProjects: await Project.countDocuments(),
      totalMessages: await Message.countDocuments(),
      topProject: mostVisitedProject[0] || null,
    });
  } catch (err) {
    res.status(500).json({ message: "Stats error" });
  }
});

export default router;
