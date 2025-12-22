import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import axios from "axios";

export default function AdminProjects() {
  const [ref, visible] = useInView();
  const [projects, setProjects] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({ title: "", desc: "" });

  // FETCH PROJECTS
  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await axios.get("http://localhost:4000/api/projects");
        setProjects(res.data);
      } catch (err) {
        console.error("Failed to fetch projects", err);
      }
    }
    fetchProjects();
  }, []);

  // START EDIT
  const startEdit = (project) => {
    setEditingId(project._id);
    setFormData({ title: project.title, desc: project.desc });
  };

  // SAVE EDIT
  const saveEdit = async (id) => {
    try {
      const res = await axios.put(
        `http://localhost:4000/api/projects/${id}`,
        formData,
        {
          headers: { "x-admin-key": "helloworld!" },
        }
      );

      setProjects((prev) => prev.map((p) => (p._id === id ? res.data : p)));

      setEditingId(null);
    } catch (err) {
      console.error("Update failed", err);
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
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                />
                <textarea
                  className="w-full mb-3 p-2 rounded bg-black text-white border brd-neon"
                  value={formData.desc}
                  onChange={(e) =>
                    setFormData({ ...formData, desc: e.target.value })
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
                </div>
                <button
                  onClick={() => startEdit(project)}
                  className="txt-neon hover:text-white font-bold"
                >
                  Edit
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
