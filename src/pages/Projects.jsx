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
      title: "Portfolio Web",
      desc: "Modern Design With UI/UX Using Tailwinnd CSS and React",
    },
  ];

  return (
    <Element name="projects">
      <div
        ref={ref}
        className={`min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-color flex items-center justify-center p-8 transition-all duration-700 ease-out transforms ${
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
              className="bg-color p-6 border-2 brd-neon rounded-xl shadow-md shdw-neon hover:scale-105 transition-transform flex flex-col justify-between sm:row-span-3"
            >
              <div>
                <h2 className="text-xl text-white font-bold">
                  {projects[0].title}
                </h2>
                <p className="text-gray-300">{projects[0].desc}</p>
              </div>
              {/* projects used frameworks section */}
              <div className="flex gap-3 flex-wrap mt-2">
                <p className="bg-prjt-apps txt-prjt-apps rounded-md text-center w-fit p-1 text-sm font-bold hover:scale-110 transition-transform">
                  JavaScript
                </p>
              </div>
            </Link>

            {/* RIGHT MAIN — projects[1] */}
            <Link
              to="/sefactory"
              className="bg-color border-2 rounded-xl brd-neon p-6 shadow-md shdw-neon hover:scale-105 transition-transform flex flex-col justify-between sm:col-span-2"
            >
              <div>
                <h2 className="text-xl text-white font-bold">
                  {projects[1].title}
                </h2>
                <p className="text-gray-300">{projects[1].desc}</p>
              </div>
              {/* projects used frameworks section */}
              <div className="flex gap-3 flex-wrap mt-2">
                <p className="bg-prjt-apps txt-prjt-apps rounded-md text-center w-fit p-1 text-sm font-bold hover:scale-110 transition-transform">
                  HTML
                </p>
                <p className="bg-prjt-apps txt-prjt-apps rounded-md text-center w-fit p-1 text-sm font-bold hover:scale-110 transition-transform">
                  JavaScript
                </p>
                <p className="bg-prjt-apps txt-prjt-apps rounded-md text-center w-fit p-1 text-sm font-bold hover:scale-110 transition-transform">
                  CSS
                </p>
              </div>
            </Link>

            {/* Spacer */}
            <div className="col-span-1 sm:col-span-2"></div>

            {/* FOOTERS using last 2 items */}
            {/* {projects.slice(2).map((proj, i) => ( */}
            <Link
              to="/weatherapp"
              className="p-6 bg-color border-2 rounded-xl brd-neon shadow-md shdw-neon hover:scale-105 transition-transform flex flex-col justify-between"
            >
              <div>
                <h2 className="text-xl text-white font-bold">
                  {projects[2].title}
                </h2>
                <p className="text-gray-400">{projects[2].desc}</p>
              </div>
              {/* projects used frameworks section */}
              <div className="flex gap-3 flex-wrap mt-2">
                <p className="bg-prjt-apps txt-prjt-apps rounded-md text-center w-fit p-1 text-sm font-bold hover:scale-110 transition-transform">
                  React
                </p>
                <p className="bg-prjt-apps txt-prjt-apps rounded-md text-center w-fit p-1 text-sm font-bold hover:scale-110 transition-transform">
                  TailwindCSS
                </p>
              </div>
            </Link>
            <Link
              to="/portfolioweb"
              className="p-6 bg-color border-2 rounded-xl brd-neon shadow-md shdw-neon hover:scale-105 transition-transform flex flex-col justify-between"
            >
              <div>
                <h2 className="text-xl text-white font-bold">
                  {projects[3].title}
                </h2>
                <p className="text-gray-400">{projects[3].desc}</p>
              </div>
              {/* projects used frameworks section */}
              <div className="flex gap-3 flex-wrap mt-2">
                <p className="bg-prjt-apps txt-prjt-apps rounded-md text-center w-fit p-1 text-sm font-bold hover:scale-110 transition-transform">
                  React
                </p>
                <p className="bg-prjt-apps txt-prjt-apps rounded-md text-center w-fit p-1 text-sm font-bold hover:scale-110 transition-transform">
                  TailwindCSS
                </p>
              </div>
            </Link>
            {/* ))} */}
          </div>
        </div>
      </div>
    </Element>
  );
}
