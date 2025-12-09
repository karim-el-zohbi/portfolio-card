import React from "react";
import { Element } from "react-scroll";
import { Link } from "react-router-dom"; // Keep this for linking to project pages
import { useInView } from "react-intersection-observer";

import Tictactoe from "./projects/tictactoe";

export default function Projects() {
  const [ref, visible] = useInView();

  const projects = [
    {
      title: "Tic-Tac-Toe",
      desc: "A xo game using VS code with HTML, CSS and JavaScript",
    },
    {
      title: "SE Factory Clone",
      desc: "Cloning an already exists website using HTML, CSS and JavaScript",
    },
    {
      title: "Weather App",
      desc: "Building a web app that interacts with API's",
    },
    {
      title: "bla bla App",
      desc: "Building a web app that interacts with API's",
    },
  ];

  return (
    <Element name="projects">
      <div
        ref={ref}
        className={`min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-black flex items-center justify-center p-8 transition-all duration-700 ease-out transforms ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-6xl w-full flex flex-col items-center gap-8">
          <h1 className="text-5xl font-bold text-center text-white mb-6">
            My Projects
          </h1>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-[1fr_auto_auto] gap-6 w-full max-w-full px-4">
            {/* LEFT MAIN — projects[0] */}
            <Link
              to="/tictactoe"
              className="bg-black p-6 border-2 border-lime-300 rounded-xl shadow-md hover:shadow-lime-300 hover:scale-105 transition-transform flex flex-col justify-between sm:row-span-3"
            >
              <div>
                <h2 className="text-xl text-white font-bold">
                  {projects[0].title}
                </h2>
                <p className="text-gray-300">{projects[0].desc}</p>
              </div>
              {/* projects used frameworks section */}
              <div className="flex gap-3 flex-wrap mt-2">
                <p className="bg-gray-800 text-gray-400 rounded-md text-center w-fit p-1 text-sm font-bold hover:scale-110 transition-transform">
                  React
                </p>
                <p className="bg-gray-800 text-gray-400 rounded-md text-center w-fit p-1 text-sm font-bold hover:scale-110 transition-transform">
                  JavaScript
                </p>
              </div>
            </Link>

            {/* RIGHT MAIN — projects[1] */}
            <Link
              to="/sefactory"
              className="bg-black border-2 rounded-xl border-lime-300 p-6 shadow-md hover:shadow-lime-300 hover:scale-105 transition-transform flex flex-col justify-between sm:col-span-2"
            >
              <div>
                <h2 className="text-xl text-white font-bold">
                  {projects[1].title}
                </h2>
                <p className="text-gray-300">{projects[1].desc}</p>
              </div>
              {/* projects used frameworks section */}
              <div className="flex gap-3 flex-wrap mt-2">
                <p className="bg-gray-800 text-gray-400 rounded-md text-center w-fit p-1 text-sm font-bold hover:scale-110 transition-transform">
                  React
                </p>
                <p className="bg-gray-800 text-gray-400 rounded-md text-center w-fit p-1 text-sm font-bold hover:scale-110 transition-transform">
                  JavaScript
                </p>
              </div>
            </Link>

            {/* Spacer */}
            <div className="col-span-1 sm:col-span-2"></div>

            {/* FOOTERS using last 2 items */}
            {projects.slice(2).map((proj, i) => (
              <div
                key={i}
                className="p-6 bg-black border-2 rounded-xl border-lime-300 shadow-md hover:shadow-lime-300 hover:scale-105 transition-transform flex flex-col justify-between"
              >
                <div>
                  <h2 className="text-xl text-white font-bold">{proj.title}</h2>
                  <p className="text-gray-400">{proj.desc}</p>
                </div>
                {/* projects used frameworks section */}
                <div className="flex gap-3 flex-wrap mt-2">
                  <p className="bg-gray-800 text-gray-400 rounded-md text-center w-fit p-1 text-sm font-bold hover:scale-110 transition-transform">
                    React
                  </p>
                  <p className="bg-gray-800 text-gray-400 rounded-md text-center w-fit p-1 text-sm font-bold hover:scale-110 transition-transform">
                    JavaScript
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Element>
  );
}
