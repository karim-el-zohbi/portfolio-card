import express from "express";
import {
  getProjects,
  getProjectBySlug,
  createProject,
  updateProject,
  deleteProject,
} from "../controllers/projectController.js";
import adminAuth from "../middleware/adminAuth.js";

const router = express.Router();

router.get("/", getProjects);
router.get("/:slug", getProjectBySlug);

router.post("/", adminAuth, createProject);
router.put("/:id", adminAuth, updateProject);
router.delete("/:id", adminAuth, deleteProject);

export default router;
