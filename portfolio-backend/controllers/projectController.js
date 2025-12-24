import Project from "../models/Project.js";
import trackVisit from "../middleware/trackVisit.js";
import slugify from "slugify";

// GET all projects
export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch projects" });
  }
};

// GET single project by slug
export const getProjectBySlug = async (req, res) => {
  try {
    const project = await Project.findOne({ slug: req.params.slug });
    if (!project) return res.status(404).json({ message: "Not found" });
    res.json(project);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch project" });
  }
};

// CREATE project (admin)
export const createProject = async (req, res) => {
  try {
    const { title, desc, tech, slug } = req.body;

    if (!title || !desc) {
      return res
        .status(400)
        .json({ message: "Title and description required" });
    }

    const project = await Project.create({
      title,
      slug: slug
        ? slugify(slug, { lower: true, strict: true })
        : slugify(title, { lower: true, strict: true }),
      desc,
      tech: Array.isArray(tech)
        ? tech
        : tech
        ? tech.split(",").map((t) => t.trim())
        : [],
    });

    res.status(201).json(project);
  } catch (err) {
    res.status(400).json({ message: "Failed to create project" });
  }
};

// UPDATE project
export const updateProject = async (req, res) => {
  try {
    const { title, desc, slug, tech } = req.body;

    const updateData = {
      title,
      desc,
      tech: Array.isArray(tech)
        ? tech
        : tech
        ? tech.split(",").map((t) => t.trim())
        : [],
    };

    // ONLY update slug if admin explicitly sends one
    if (slug && slug.trim() !== "") {
      updateData.slug = slugify(slug, { lower: true, strict: true });
    }

    const updated = await Project.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    });

    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: "Failed to update project" });
  }
};

// DELETE project
export const deleteProject = async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(400).json({ message: "Failed to delete project" });
  }
};

export const getProjectBySlugView = async (req, res) => {
  try {
    const project = await Project.findOne({ slug: req.params.slug });
    if (!project) return res.status(404).json({ message: "Not found" });

    await trackVisit(`project:${project.slug}`);

    res.json(project);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch project" });
  }
};
