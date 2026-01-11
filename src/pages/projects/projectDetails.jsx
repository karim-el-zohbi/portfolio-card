import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useInView } from "react-intersection-observer";

export default function ProjectDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();
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
      className={`relative min-h-screen flex flex-col gap-3 items-center justify-center bg-color w-screen transition-all duration-700 ease-out transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <button
        onClick={() => navigate("/")}
        aria-label="Close"
        className="absolute top-4 right-4 text-white text-3xl px-2 py-1 hover:scale-110"
      >
        ×
      </button>
      <div className="bg-color border-2 brd-neon p-8 rounded-2xl shadow-lg flex flex-col gap-4 w-96 hover:scale-105 transition-transform">
        <h1 className="text-3xl font-bold text-center txt-neon txt-neon-hover">
          {project.title}
        </h1>

        <p className="text-white">{project.desc}</p>

        {/* Tech stack */}
        {/* {project.tech?.length > 0 && (
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
        )} */}
      </div>
      {project.githubLink ? (
        <button
          className="mt-4 bg-neon px-6 py-2 rounded font-bold hover:bg-neon-hover transition-colors"
          type="button"
          onClick={() => {
            const url =
              project.githubLink.startsWith("http") ||
              project.githubLink.startsWith("//")
                ? project.githubLink
                : `https://${project.githubLink}`;
            window.open(url, "_blank", "noopener,noreferrer");
          }}
          // className="focus:outline-none"
          aria-label="Open GitHub"
        >
          Click for code{" "}
          <i className="fa-brands fa-github text-white text-2xl" />
        </button>
      ) : null}
    </div>
  );
}
