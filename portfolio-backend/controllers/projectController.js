import Project from "../models/Project.js";
import trackVisit from "../middleware/trackVisit.js";
import slugify from "slugify";

// GET all projects
export const getProjects = async (req, res) => {
  // Fetch all projects from the database, sorted by creation date
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch projects" });
  }
};

// GET single project by slug
export const getProjectBySlug = async (req, res) => {
  // Fetch project by slug from the database
  try {
    // Find the project by its slug
    const project = await Project.findOne({ slug: req.params.slug });
    // If not found, return 404
    if (!project) return res.status(404).json({ message: "Not found" });
    res.json(project);
  } catch (err) {
    // Handle errors
    res.status(500).json({ message: "Failed to fetch project" });
  }
};

// CREATE project (admin)
export const createProject = async (req, res) => {
  // Create a new project in the database
  try {
    // Extract project details from request body
    const { title, desc, tech, slug } = req.body;
    // Validate required fields
    if (!title || !desc || !slug || !tech) {
      return res
        .status(400)
        .json({ message: "Title, description, slug and tech are required" });
    }
    // Create and save the new project
    const project = await Project.create({
      title,
      // Always normalize slug to lowercase and remove separators
      slug: slugify(slug, { lower: true, strict: true, replacement: "" }),
      desc,
      tech: Array.isArray(tech)
        ? tech
        : tech
        ? tech.split(",").map((t) => t.trim())
        : [],
    });
    // Respond with the created project
    res.status(201).json(project);
  } catch (err) {
    res.status(400).json({ message: "Failed to create project" });
  }
};

// UPDATE project
export const updateProject = async (req, res) => {
  try {
    const { title, desc, slug, tech } = req.body;
    // Validate required fields
    if (!title || !desc || !slug || !tech) {
      return res
        .status(400)
        .json({ message: "Title, description, slug and tech are required" });
    }
    // Prepare update data
    const updateData = {
      title,
      desc,
      tech: Array.isArray(tech)
        ? tech
        : tech
        ? tech.split(",").map((t) => t.trim())
        : [],
      // Normalize provided slug to remove separators
      slug: slugify(slug, { lower: true, strict: true, replacement: " " }),
    };
    // Find and update the project by ID
    const updated = await Project.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    });
    // If project not found, return 404
    if (!updated) return res.status(404).json({ message: "Project not found" });
    // Respond with the updated project
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: "Failed to update project" });
  }
};
// DELETE project
export const deleteProject = async (req, res) => {
  try {
    // Find and delete the project by ID
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    // Handle errors
    res.status(400).json({ message: "Failed to delete project" });
  }
};

export const getProjectBySlugView = async (req, res) => {
  // Fetch project by slug and track visits
  try {
    // Find the project by its slug
    const project = await Project.findOne({ slug: req.params.slug });
    if (!project) return res.status(404).json({ message: "Not found" });
    // Track the visit for analytics
    await trackVisit(`project:${project.slug}`);

    res.json(project);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch project" });
  }
};
