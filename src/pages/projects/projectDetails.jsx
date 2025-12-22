import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useInView } from "react-intersection-observer";

export default function ProjectDetails() {
  const { slug } = useParams();
  const [ref, visible] = useInView();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProject() {
      try {
        const res = await axios.get(
          `http://localhost:4000/api/projects/${slug}`
        );
        setProject(res.data);
      } catch (err) {
        console.error("Project not found", err);
      } finally {
        setLoading(false);
      }
    }
    fetchProject();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-color flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-color flex items-center justify-center text-white">
        Project not found
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={`min-h-screen flex items-center justify-center bg-color w-screen transition-all duration-700 ease-out transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="bg-color border-2 brd-neon p-8 rounded-2xl shadow-lg flex flex-col gap-4 w-96 hover:scale-105 transition-transform">
        <h1 className="text-3xl font-bold text-center txt-neon txt-neon-hover">
          {project.title}
        </h1>

        <p className="text-white">{project.longDesc}</p>

        {/* Tech stack */}
        {project.tech?.length > 0 && (
          <div className="flex gap-2 flex-wrap mt-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="bg-prjt-apps txt-prjt-apps px-3 py-1 rounded-md text-sm font-bold hover:scale-110 transition-transform"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
