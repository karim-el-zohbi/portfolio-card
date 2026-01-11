import React from "react";
import { useInView } from "react-intersection-observer";
export default function Portfolioweb() {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      className={`min-h-screen flex items-center justify-center bg-color w-screen  transition-all duration-700 ease-out transforms  ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="bg-color border-2 brd-neon p-8 rounded-2xl shadow-lg flex flex-col gap-3 w-96  hover:scale-105 transition-transform">
        <h1 className="text-3xl font-bold text-center txt-neon txt-neon-hover ">
          Portfolio Web
        </h1>
        <p className="text-white text-sm">
          A modern personal portfolio built with React, using powerful React
          Hooks for clean state handling and smooth animations. The interface
          features an animated UI/UX with polished transitions, creating an
          engaging and responsive browsing experience. It also includes a custom
          Admin Layout with a clean dashboard-style design for managing
          projects, stats, and content efficiently. Overall, the portfolio
          delivers a fast, interactive, and visually refined digital identity.
        </p>
      </div>
    </div>
  );
}
