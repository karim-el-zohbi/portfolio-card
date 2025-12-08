import React from "react";
export default function AdminHome() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-lime-300 mb-6">Dashboard</h1>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-black border-2 border-lime-300 p-6 rounded-xl shadow hover:shadow-lime-300 transition">
          <h2 className="text-xl font-bold text-white">Total Projects</h2>
          <p className="text-gray-400 text-4xl mt-4">12</p>
        </div>

        <div className="bg-black border-2 border-lime-300 p-6 rounded-xl shadow hover:shadow-lime-300 transition">
          <h2 className="text-xl font-bold text-white">Unread Emails</h2>
          <p className="text-gray-400 text-4xl mt-4">5</p>
        </div>

        <div className="bg-black border-2 border-lime-300 p-6 rounded-xl shadow hover:shadow-lime-300 transition">
          <h2 className="text-xl font-bold text-white">New Messages</h2>
          <p className="text-gray-400 text-4xl mt-4">8</p>
        </div>
      </div>
    </div>
  );
}
