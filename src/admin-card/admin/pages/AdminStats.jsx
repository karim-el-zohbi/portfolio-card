import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

import axios from "axios";

export default function AdminStats() {
  const [ref, visible] = useInView();

  const [stats, setStats] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchStats() {
      const res = await axios.get("http://localhost:4000/api/stats", {
        headers: { "x-admin-key": "helloworld!" },
      });
      setStats(res.data);
    }
    fetchStats();
  }, []);

  if (!stats) return <p className="text-white">Loading...</p>;

  return (
    <div
      ref={ref}
      className={`grid sm:grid-cols-2 gap-6 transition-all duration-700 ease-out transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <StatCard title="Total Visits" value={stats.totalVisits} />
      <StatCard
        title="Projects"
        value={stats.totalProjects}
        onClick={() => navigate("/admin/projects")}
      />
      <StatCard
        title="Messages"
        value={stats.totalMessages}
        onClick={() => navigate("/admin/messages")}
      />
      <StatCard
        title="Top Project"
        value={stats.topProject?.page?.replace("project:", "") || "—"}
      />
    </div>
  );
}

function StatCard({ title, value, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`bg-color border-2 brd-neon p-6 rounded-xl ${
        onClick ? "cursor-pointer hover:scale-105 transition-transform" : ""
      }`}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e) => {
        if (onClick && (e.key === "Enter" || e.key === " ")) onClick();
      }}
    >
      <h2 className="text-gray-400">{title}</h2>
      <p className="text-3xl txt-neon font-bold">{value}</p>
    </div>
  );
}
