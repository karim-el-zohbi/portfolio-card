import { NavLink } from "react-router-dom";
import React from "react";

export default function Sidebar({ onLinkClick, className }) {
  return (
    <aside
      className={`${className} w-64 h-screen bg-color border-r-2 brd-r-neon text-white p-4`}
    >
      <h2 className="text-xl font-bold mb-4">Admin</h2>
      <nav className="flex flex-col gap-3">
        <NavLink
          to="/admin"
          end
          onClick={onLinkClick}
          className={`p-2 rounded bg-neon-hover txt-black-hover transition-colors`}
        >
          Home
        </NavLink>
        <NavLink
          to="/admin/projects"
          onClick={onLinkClick}
          className={`p-2 rounded bg-neon-hover txt-black-hover transition-colors`}
        >
          Projects
        </NavLink>
        <NavLink
          to="/admin/stats"
          onClick={onLinkClick}
          className={`p-2 rounded bg-neon-hover txt-black-hover transition-colors`}
        >
          Statistics
        </NavLink>
        <NavLink
          to="/admin/emails"
          onClick={onLinkClick}
          className={`p-2 rounded bg-neon-hover txt-black-hover transition-colors`}
        >
          Emails
        </NavLink>
        <NavLink
          to="/admin/messages"
          onClick={onLinkClick}
          className={`p-2 rounded bg-neon-hover txt-black-hover transition-colors`}
        >
          Messages
        </NavLink>
      </nav>
    </aside>
  );
}
