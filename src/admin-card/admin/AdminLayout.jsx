import { Outlet } from "react-router-dom";
import React from "react";
import AdminSidebar from "./Sidebar";

export default function AdminLayout() {
  return (
    <div className="flex">
      <AdminSidebar />

      {/* Child admin pages render here */}
      <div className="flex-1 p-6">
        <Outlet />
        {/* renders the AdminSidebar childs inside the page */}
      </div>
    </div>
  );
}
