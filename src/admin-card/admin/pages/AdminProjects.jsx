import React from "react";
export default function AdminProjects() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-lime-300 mb-6">Manage Projects</h1>

      <div className="space-y-4">
        <div className="bg-black border-2 border-lime-300 p-4 rounded-xl flex justify-between">
          <span className="text-white">Tic Tac Toe</span>
          <button className="text-lime-300 hover:text-white">Edit</button>
        </div>

        <div className="bg-black border-2 border-lime-300 p-4 rounded-xl flex justify-between">
          <span className="text-white">Weather App</span>
          <button className="text-lime-300 hover:text-white">Edit</button>
        </div>
      </div>
    </div>
  );
}
