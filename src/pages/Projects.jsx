import React from "react";
import { Element } from "react-scroll";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Tictactoe from "./projects/tictactoe";

export default function Projects() {
  const projects = [
    {
      title: "Tic-Tac-Toe",
      desc: "A xo game using VS code with HTML, CSS and JavaScript",
    },
    {
      title: "SE Factory Clone",
      desc: "Clonning an already exists website using HTML,CSS and JavaScript",
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
  const frame = [
    {
      fname: "React",
    },
    { fname: "Python" },
    { fname: "JavaScript" },
  ];

  return (
    <Element name="projects">
      <div className="min-h-screen w-screen bg-black flex items-center justify-center p-8">
        <div className="max-w-6xl w-full flex flex-col items-center gap-8">
          <h1 className="text-5xl font-bold text-center text-white mb-6">
            My Projects
          </h1>

          {/* Grid Layout */}

          <div className="grid grid-cols-3 grid-rows-[1fr_auto_auto] gap-6 w-full">
            {/* LEFT MAIN — projects[0] */}

            <Link
              to="/tictactoe"
              className="col-span-1 row-span-3 bg-black p-6 border-2 border-lime-300 rounded-xl shadow-md hover:shadow-lime-300 hover:scale-105 transition-transform flex flex-col justify-between"
            >
              <div>
                <h2 className="text-xl text-white font-bold">
                  {projects[0].title}
                </h2>
                <p className="text-gray-300">{projects[0].desc}</p>
              </div>
              <div className="flex gap-3">
                <p className="bg-gray-800 text-gray-400 rounded-md text-center w-fit p-1 text-sm font-bold  hover:scale-130 transition-transform">
                  React
                </p>
                <p className="bg-gray-800 text-gray-400 rounded-md text-center w-fit p-1 text-sm font-bold hover:scale-130 transition-transform">
                  JavaScript
                </p>
              </div>
            </Link>
            {/* RIGHT MAIN — projects[1] */}

            <Link
              to="/sefactory"
              className="col-span-2 bg-black border-2 rounded-xl border-lime-300 p-6 shadow-md hover:shadow-lime-300 hover:scale-105 transition-transform flex flex-col justify-between "
            >
              <div>
                <h2 className="text-xl text-white font-bold">
                  {projects[1].title}
                </h2>
                <p className="text-gray-300">{projects[1].desc}</p>
              </div>
              <div className="flex gap-3">
                <p className="bg-gray-800 text-gray-400 rounded-md text-center w-fit p-1 text-sm font-bold hover:scale-130 transition-transform">
                  React
                </p>
                <p className="bg-gray-800 text-gray-400 rounded-md text-center w-fit p-1 text-sm font-bold hover:scale-130 transition-transform">
                  JavaScript
                </p>
              </div>
            </Link>

            {/* Spacer */}
            <div className="col-span-2"></div>

            {/* FOOTERS using last 2 items */}
            <div className="col-span-2 grid grid-cols-2 gap-6 ">
              <Link
                to="/weatherapp"
                className="p-6 bg-black border-2 rounded-xl border-lime-300 shadow-md hover:shadow-lime-300 hover:scale-105 transition-transform flex flex-col justify-between"
              >
                <div>
                  <h2 className="text-xl text-white font-bold">
                    {projects[2].title}
                  </h2>
                  <p className="text-gray-400">{projects[2].desc}</p>
                </div>
                <div className="flex gap-3">
                  <p className="bg-gray-800 text-gray-400 rounded-md text-center w-fit p-1 text-sm font-bold hover:scale-130 transition-transform">
                    React
                  </p>
                  <p className="bg-gray-800 text-gray-400 rounded-md text-center w-fit p-1 text-sm font-bold hover:scale-130 transition-transform">
                    JavaScript
                  </p>
                </div>
              </Link>

              <div className="p-6 bg-black border-2 rounded-xl border-lime-300 shadow-md hover:shadow-lime-300 hover:scale-105 transition-transform flex flex-col justify-between">
                <div>
                  <h2 className="text-xl text-white font-bold">
                    {projects[3].title}
                  </h2>
                  <p className="text-gray-400">{projects[3].desc}</p>
                </div>{" "}
                <div className="flex gap-3">
                  <p className="bg-gray-800 text-gray-400 rounded-md text-center w-fit p-1 text-sm font-bold hover:scale-130 transition-transform">
                    React
                  </p>
                  <p className="bg-gray-800 text-gray-400 rounded-md text-center w-fit p-1 text-sm font-bold hover:scale-130 transition-transform">
                    JavaScript
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}
