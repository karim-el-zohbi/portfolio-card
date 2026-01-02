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
console.log("ADMIN AUTH:", adminAuth);

router.get("/", getProjects);
router.get("/:slug", getProjectBySlug);

router.post("/", adminAuth, createProject);
router.put(
  "/:id",
  (req, res, next) => {
    console.log("PUT /api/projects HIT");
    next();
  },
  adminAuth,
  updateProject
);
router.delete("/:id", adminAuth, deleteProject);

export default router;
