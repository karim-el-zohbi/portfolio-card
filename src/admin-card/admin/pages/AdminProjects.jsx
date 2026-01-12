import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import axios from "axios";

const VITE_API_URL = import.meta.env.VITE_API_URL;

export default function AdminProjects() {
  const [ref, visible] = useInView();
  const [projects, setProjects] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    desc: "",
    tech: "",
    githubLink: "",
  });
  const adminHeaders = {
    headers: { "x-admin-key": "helloworld!" },
  };

  // FETCH PROJECTS
  useEffect(() => {
    // Fetch projects from the backend
    async function fetchProjects() {
      try {
        // Make GET request to fetch projects
        const res = await axios.get(`http://${VITE_API_URL}/api/projects`);
        setProjects(res.data);
      } catch (err) {
        console.error("Failed to fetch projects", err);
      }
    }
    fetchProjects(); // Invoke the fetch function
  }, []); // Empty dependency array to run once on mount

  // START EDIT
  const startEdit = (project) => {
    // Set the editing ID and populate form data with project details
    setEditingId(project._id);
    setFormData({
      title: project.title,
      desc: project.desc,
      slug: project.slug,
      tech: project.tech,
      githubLink: project.githubLink,
    });
  };
  // SAVE EDIT
  const saveEdit = async (id) => {
    try {
      // Make PUT request to update the project
      const res = await axios.put(
        `http://${VITE_API_URL}/api/projects/${id}`,
        formData,
        {
          headers: {
            "x-admin-key": "helloworld!",
          },
        }
      );

      // update local state with new project data
      setProjects((prev) => prev.map((p) => (p._id === id ? res.data : p)));
      // Clear editing state
      setEditingId(null);
    } catch (err) {
      console.error("Update failed", err);
    }
  };
  // ADD PROJECT
  const addProject = async () => {
    try {
      // Make POST request to create a new project
      const res = await axios.post(
        `http://${VITE_API_URL}/api/projects`,
        {
          title: "New Project",
          desc: "Project description",
          slug: "slug goes here",
          tech: "tech",
          githubLink: "github link",
        },
        // Include admin key in headers for authentication
        adminHeaders
      );
      // Update local state to include the new project
      setProjects((prev) => [...prev, res.data]);
    } catch (err) {
      console.error("Create failed", err);
    }
  };
  // DELETE PROJECT
  const deleteProject = async (id) => {
    // Confirm deletion
    if (!confirm("Delete this project?")) return;
    // Proceed with deletion
    try {
      await axios.delete(
        `http://${VITE_API_URL}/api/projects/${id}`,
        adminHeaders
      );
      // Update local state to remove the deleted project
      setProjects((prev) => prev.filter((p) => p._id !== id));
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h1 className="text-3xl text-center font-bold txt-neon mb-6">
        Manage Projects
      </h1>
      <button
        onClick={addProject}
        className="bg-neon px-6 py-2 rounded font-bold mb-6"
      >
        + Add Project
      </button>

      <div className="space-y-4">
        {projects.map((project) => (
          <div
            key={project._id}
            className="bg-color border-2 brd-neon p-4 rounded-xl"
          >
            {editingId === project._id ? (
              <>
                <input
                  className="w-full mb-2 p-2 rounded bg-black text-white border brd-neon"
                  value={formData.title}
                  placeholder="title of project"
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                />
                <input
                  className="w-full mb-2 p-2 rounded bg-black text-white border brd-neon"
                  value={formData.slug}
                  placeholder="slug for project"
                  onChange={(e) =>
                    setFormData({ ...formData, slug: e.target.value })
                  }
                />
                <textarea
                  className="w-full mb-3 p-2 rounded bg-black text-white border brd-neon"
                  value={formData.desc}
                  placeholder="full description"
                  onChange={(e) =>
                    setFormData({ ...formData, desc: e.target.value })
                  }
                />
                <input
                  className="w-full mb-2 p-2 rounded bg-black text-white border brd-neon"
                  value={formData.tech}
                  placeholder="tech used"
                  onChange={(e) =>
                    setFormData({ ...formData, tech: e.target.value })
                  }
                />
                <input
                  className="w-full mb-2 p-2 rounded bg-black text-white border brd-neon"
                  value={formData.githublink}
                  placeholder="github link"
                  onChange={(e) =>
                    setFormData({ ...formData, githubLink: e.target.value })
                  }
                />

                <button
                  onClick={() => saveEdit(project._id)}
                  className="bg-neon px-4 py-2 rounded font-bold mr-2"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditingId(null)}
                  className="text-gray-400"
                >
                  Cancel
                </button>
              </>
            ) : (
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-white font-bold">{project.title}</h2>
                  <p className="text-gray-400 text-sm">{project.desc}</p>
                  <p className="text-gray-400 text-sm">{project.slug}</p>
                  <p className="text-gray-400 text-sm">{project.tech}</p>
                </div>
                <button
                  onClick={() => startEdit(project)}
                  className="txt-neon hover:text-white font-bold"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteProject(project._id)}
                  className="text-red-500 hover:text-red-300 ml-4 font-bold"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
