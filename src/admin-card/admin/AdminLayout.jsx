import { Outlet } from "react-router-dom";
import React from "react";
import AdminSidebar from "./Sidebar";
import { useInView } from "react-intersection-observer";

export default function AdminLayout() {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      className={`flex transition-all duration-700 ease-out transforms ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <AdminSidebar />

      {/* Child admin pages render here */}
      <div className="flex-1 p-6">
        <Outlet />
        {/* renders the AdminSidebar childs inside the page */}
      </div>
    </div>
  );
}
