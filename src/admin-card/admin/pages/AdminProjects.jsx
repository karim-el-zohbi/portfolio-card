import React from "react";
import { useInView } from "react-intersection-observer";
export default function AdminProjects() {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out transforms ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h1 className="text-3xl font-bold txt-neon mb-6">Manage Projects</h1>

      <div className="space-y-4">
        <div className="bg-color border-2 brd-neon p-4 rounded-xl flex justify-between">
          <span className="text-white">Tic Tac Toe</span>
          <button className="txt-neon hover:text-white">Edit</button>
        </div>

        <div className="bg-color border-2 brd-neon p-4 rounded-xl flex justify-between">
          <span className="text-white">Weather App</span>
          <button className="txt-neon hover:text-white">Edit</button>
        </div>
      </div>
    </div>
  );
}
