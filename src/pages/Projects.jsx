import React, { useEffect, useState } from "react";
import { Element } from "react-scroll";
import { Link, useParams } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import axios from "axios";

export default function Projects() {
  const { slug } = useParams();
  const [ref, visible] = useInView();
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // if (!slug) return;
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

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await axios.get("http://localhost:4000/api/projects");
        setProjects(res.data);
      } catch (err) {
        console.error("Failed to load projects", err);
      }
    }
    fetchProjects();
  }, []);
  if (loading) {
    return (
      <div className="min-h-screen bg-color flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  // if (projects.length < 4) return null; // safety
  const isSpecialGrid = projects.length === 4;

  return (
    <Element name="projects">
      <div
        ref={ref}
        className={`min-h-screen w-full overflow-x-hidden bg-color flex items-center justify-center p-8 transition-all duration-700 ease-out transform ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-6xl w-full flex flex-col items-center gap-8">
          <h1 className="text-5xl font-bold text-center text-white mb-6">
            My Projects
          </h1>

          {isSpecialGrid ? (
            // 🔥 SPECIAL 4-PROJECT GRID
            <div className="grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-[1fr_auto_auto] gap-6 w-full px-4">
              {/* LEFT MAIN */}
              <Link
                to={`/projects/${projects[0].slug}`}
                className="bg-color p-6 border-2 brd-neon rounded-xl shdw-neon hover:scale-105 transition-transform flex flex-col justify-between sm:row-span-3"
              >
                <div>
                  <h2 className="text-xl text-white font-bold">
                    {projects[0].title}
                  </h2>
                  <p className="text-gray-300">{projects[0].slug}</p>
                  {projects[0].tech && (
                    <div className="flex gap-2 flex-wrap mt-2">
                      {" "}
                      {(Array.isArray(projects[0].tech)
                        ? projects[0].tech
                        : projects[0].tech.split(",")
                      ).map((t) => (
                        <span
                          key={t}
                          className="bg-prjt-apps txt-prjt-apps px-3 py-1 rounded-md text-sm font-bold hover:scale-110 transition-transform"
                        >
                          {" "}
                          {t.trim()}{" "}
                        </span>
                      ))}{" "}
                    </div>
                  )}
                </div>
              </Link>

              {/* RIGHT MAIN */}
              <Link
                to={`/projects/${projects[1].slug}`}
                className="bg-color p-6 border-2 brd-neon rounded-xl shdw-neon hover:scale-105 transition-transform sm:col-span-2"
              >
                <h2 className="text-xl text-white font-bold">
                  {projects[1].title}
                </h2>
                <p className="text-gray-300">{projects[1].slug}</p>
                {projects[1].tech && (
                  <div className="flex gap-2 flex-wrap mt-2">
                    {" "}
                    {(Array.isArray(projects[1].tech)
                      ? projects[1].tech
                      : projects[1].tech.split(",")
                    ).map((t) => (
                      <span
                        key={t}
                        className="bg-prjt-apps txt-prjt-apps px-3 py-1 rounded-md text-sm font-bold hover:scale-110 transition-transform"
                      >
                        {" "}
                        {t.trim()}{" "}
                      </span>
                    ))}{" "}
                  </div>
                )}
              </Link>

              <div className="col-span-1 sm:col-span-2"></div>

              {/* FOOTERS */}
              {projects.slice(2).map((proj) => (
                <ProjectCard key={proj._id} project={proj} />
              ))}
            </div>
          ) : (
            // 📦 STACKED GRID (≤3 or ≥5)
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-4">
              {projects.map((proj) => (
                <ProjectCard key={proj._id} project={proj} />
              ))}
            </div>
          )}
        </div>
      </div>
    </Element>
  );
}

function ProjectCard({ project }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="bg-color p-6 border-2 brd-neon rounded-xl shdw-neon hover:scale-105 transition-transform"
    >
      <h2 className="text-xl text-white font-bold">{project.title}</h2>
      <p className="text-gray-400">{project.slug}</p>

      {project.tech && (
        <div className="flex gap-2 flex-wrap mt-2">
          {(Array.isArray(project.tech)
            ? project.tech
            : project.tech.split(",")
          ).map((t, i) => (
            <span
              key={`${t}-${i}`}
              className="bg-prjt-apps txt-prjt-apps px-3 py-1 rounded-md text-sm font-bold hover:scale-110 transition-transform"
            >
              {t.trim()}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
}
