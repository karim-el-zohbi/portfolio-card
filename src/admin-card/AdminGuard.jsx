import React from "react";
import { useState, useEffect } from "react";

const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD;

export default function AdminGuard({ children }) {
  const [isAllowed, setIsAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const ok = sessionStorage.getItem("admin-auth");
    if (ok === "true") setIsAllowed(true);
  }, []);

  const handleSubmit = () => {
    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem("admin-auth", "true");
      setIsAllowed(true);
    } else {
      setError("Wrong password");
    }
  };

  if (isAllowed) return children;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">
      <div className="bg-zinc-900 p-6 rounded-xl w-[90%] max-w-md text-white">
        <h2 className="text-2xl font-bold mb-4">Admin Access</h2>

        <input
          type="password"
          className="w-full p-2 rounded bg-zinc-800 border border-zinc-700"
          placeholder="Enter admin password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        />

        {error && <p className="text-red-400 mt-2 font-semibold">{error}</p>}

        <button
          onClick={handleSubmit}
          className="mt-4 w-full bg-blue-600 hover:bg-blue-700 transition p-2 rounded font-bold"
        >
          Enter
        </button>
      </div>
    </div>
  );
}
