import React from "react";
import { useInView } from "react-intersection-observer";

export default function Footer() {
  const [ref, visible] = useInView();
  return (
    // Main footer container
    <div
      ref={ref}
      className={`flex flex-col w-full max-w-[100vw] overflow-x-hidden border-t-2 brd-neon bg-color transition-all duration-700 ease-out transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
      }`}
    >
      {/* Footer text */}
      <h5 className="text-center p-2 text-white text-sm opacity-60">
        karim el zohbi — all content preserved & saved | elegant designs with
        clean code 2025©
      </h5>
    </div>
  );
}
