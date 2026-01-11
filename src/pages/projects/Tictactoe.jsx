import React from "react";
import { useInView } from "react-intersection-observer";
export default function Tictactoe() {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      className={`min-h-screen flex items-center justify-center bg-color w-screen transition-all duration-700 ease-out transforms  ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="bg-color border-2 brd-neon p-8 rounded-2xl shadow-lg flex flex-col gap-3 w-96 hover:scale-105 transition-transform">
        <h1 className="text-3xl font-bold text-center txt-neon txt-neon-hover">
          Tic Tac Toe
        </h1>
        <p className="text-white ">
          This Tic-Tac-Toe project delivers a smooth, responsive gameplay
          experience powered by clean, well-structured JavaScript. The
          neon-themed UI adds a modern, energetic vibe that makes each move feel
          electric. Simple logic, sharp design, and a polished finish—proof that
          even classic games can glow with style.
        </p>
      </div>
    </div>
  );
}
