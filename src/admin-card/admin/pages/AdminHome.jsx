import React from "react";
import { useInView } from "react-intersection-observer";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
export default function AdminHome() {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out transforms ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h1 className="text-4xl font-bold txt-neon mb-6">Dashboard</h1>

      <div className="grid grid-cols-3 gap-6">
        <NavLink
          to="/admin/projects"
          className="bg-color border-2 brd-neon p-6 rounded-xl shadow shdw-neon hover:scale-105 transition-transform "
        >
          <h2 className="text-xl font-bold text-white">Total Projects</h2>
          <p className="text-gray-400 text-4xl mt-4">12</p>
        </NavLink>

        <NavLink
          to="/admin/emails"
          className="bg-color border-2 brd-neon p-6 rounded-xl shadow shdw-neon hover:scale-105 transition-transform"
        >
          <h2 className="text-xl font-bold text-white">Unread Emails</h2>
          <p className="text-gray-400 text-4xl mt-4">5</p>
        </NavLink>

        <NavLink
          to="/admin/messages"
          className="bg-color border-2 brd-neon p-6 rounded-xl shadow shdw-neon hover:scale-105 transition-transform"
        >
          <h2 className="text-xl font-bold text-white">New Messages</h2>
          <p className="text-gray-400 text-4xl mt-4">8</p>
        </NavLink>
      </div>
    </div>
  );
}
