import { NavLink } from "react-router-dom";
import React from "react";

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-black border-r-2 border-r-lime-400 text-white p-4">
      {/* for a sidebar nav */}
      <h2 className="text-xl font-bold mb-4">Admin</h2>

      <nav className="flex flex-col gap-3">
        <NavLink to="/admin" end>
          Home
        </NavLink>
        <NavLink to="/admin/projects">Projects</NavLink>
        <NavLink to="/admin/stats">Statistics</NavLink>
        <NavLink to="/admin/emails">Emails</NavLink>
        <NavLink to="/admin/messages">Messages</NavLink>
        {/* routes inside the aside navbar */}
      </nav>
    </aside>
  );
}
