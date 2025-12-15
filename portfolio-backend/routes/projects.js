const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/projectsController");

// simple middleware to protect admin actions
function requireAdmin(req, res, next) {
  const key = req.header("x-admin-key");
  if (!key || key !== process.env.ADMIN_KEY)
    return res.status(401).json({ error: "unauthorized" });
  return next();
}

router.get("/", ctrl.listProjects);
router.get("/:id", ctrl.getProject);

// protected
router.post("/", requireAdmin, ctrl.createProject);
router.put("/:id", requireAdmin, ctrl.updateProject);
router.delete("/:id", requireAdmin, ctrl.deleteProject);

module.exports = router;
