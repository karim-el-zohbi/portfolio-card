import { Outlet } from "react-router-dom";
import React, { useState } from "react";
import AdminSidebar from "./Sidebar";
import { useInView } from "react-intersection-observer";
import AdminGuard from "../AdminGuard";

export default function AdminLayout() {
  const [ref, visible] = useInView();
  // for transition onload
  const [sidebarOpen, setSidebarOpen] = useState(false); // toggle for mobile

  return (
    <AdminGuard>
      <div
        ref={ref}
        className={`flex transition-all duration-700 ease-out transform ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } min-h-screen relative`}
      >
        {/* Sidebar */}
        <AdminSidebar
          sidebarOpen={sidebarOpen}
          onLinkClick={() => setSidebarOpen(false)} // closes sidebar on click
          className={`fixed z-50 top-0 left-0 h-full bg-color transition-transform duration-300 transform
        md:relative md:translate-x-0
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
        />

        {/* Mobile toggle button */}
        <button
          className={`md:hidden fixed top-4 z-60 bg-neon p-2 rounded-md shadow-lg
        transition-all duration-300 ease-out
        ${sidebarOpen ? "left-50" : "left-4"}`} // moves button when sidebar opens
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? "✖" : "☰"}
        </button>
        {/* Overlay for mobile when sidebar open */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-color/50 z-40 md:hidden"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}

        {/* Main content */}
        <div className="flex-1 p-6 md:ml-64">
          <Outlet />
        </div>
      </div>
    </AdminGuard>
  );
}
