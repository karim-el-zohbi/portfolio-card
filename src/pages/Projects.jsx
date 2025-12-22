import React, { useEffect, useState } from "react";
import { Element } from "react-scroll";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import axios from "axios";

export default function Projects() {
  const [ref, visible] = useInView();
  const [projects, setProjects] = useState([]);

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

  if (projects.length < 4) return null; // safety

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
                <p className="text-gray-300">{projects[0].desc}</p>
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
              <p className="text-gray-300">{projects[1].desc}</p>
            </Link>

            <div className="col-span-1 sm:col-span-2"></div>

            {/* FOOTERS */}
            {projects.slice(2, 4).map((proj) => (
              <Link
                key={proj._id}
                to={`/projects/${proj.slug}`}
                className="bg-color p-6 border-2 brd-neon rounded-xl shdw-neon hover:scale-105 transition-transform"
              >
                <h2 className="text-xl text-white font-bold">{proj.title}</h2>
                <p className="text-gray-400">{proj.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Element>
  );
}
