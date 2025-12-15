const Project = require("../models/Project");

async function createProject(req, res) {
  try {
    const payload = req.body;
    const project = await Project.create(payload);
    return res.status(201).json(project);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "server error" });
  }
}

async function listProjects(req, res) {
  try {
    const list = await Project.find().sort({ createdAt: -1 });
    return res.json(list);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "server error" });
  }
}

async function getProject(req, res) {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ error: "not found" });
    return res.json(project);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "server error" });
  }
}

async function updateProject(req, res) {
  try {
    const updated = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.json(updated);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "server error" });
  }
}

async function deleteProject(req, res) {
  try {
    await Project.findByIdAndDelete(req.params.id);
    return res.json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "server error" });
  }
}

module.exports = {
  createProject,
  listProjects,
  getProject,
  updateProject,
  deleteProject,
};
