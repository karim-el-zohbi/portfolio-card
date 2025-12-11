import React from "react";
import { useInView } from "react-intersection-observer";
export default function AdminStats() {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out transforms ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h1 className="text-3xl font-bold txt-neon mb-6">Statistics</h1>

      <div className="bg-color border-2 brd-neon p-6 rounded-xl shadow">
        <p className="text-gray-300">Charts & analytics will go here.</p>
      </div>
    </div>
  );
}
