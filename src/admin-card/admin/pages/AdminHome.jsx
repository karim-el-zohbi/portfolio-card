import React from "react";
import { useInView } from "react-intersection-observer";
import { NavLink } from "react-router-dom";

export default function AdminHome() {
  const [ref, visible] = useInView({ triggerOnce: true });
  // for transition onload

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } p-4`}
    >
      <h1 className="text-4xl font-bold txt-neon mb-6 text-center md:text-left">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <NavLink
          to="/admin/projects"
          className="bg-color border-2 brd-neon p-6 rounded-xl shadow shdw-neon hover:scale-105 transition-transform flex flex-col items-center"
        >
          <h2 className="text-xl font-bold text-white mb-2">Total Projects</h2>
          <p className="text-gray-400 text-4xl">12</p>
        </NavLink>

        <NavLink
          to="/admin/emails"
          className="bg-color border-2 brd-neon p-6 rounded-xl shadow shdw-neon hover:scale-105 transition-transform flex flex-col items-center"
        >
          <h2 className="text-xl font-bold text-white mb-2">Unread Emails</h2>
          <p className="text-gray-400 text-4xl">5</p>
        </NavLink>

        <NavLink
          to="/admin/messages"
          className="bg-color border-2 brd-neon p-6 rounded-xl shadow shdw-neon hover:scale-105 transition-transform flex flex-col items-center"
        >
          <h2 className="text-xl font-bold text-white mb-2">New Messages</h2>
          <p className="text-gray-400 text-4xl">8</p>
        </NavLink>
      </div>
    </div>
  );
}
