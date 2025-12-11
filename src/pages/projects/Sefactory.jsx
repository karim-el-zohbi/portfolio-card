import React from "react";
import { useInView } from "react-intersection-observer";
export default function Sefactory() {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      className={`min-h-screen flex items-center justify-center bg-color w-screen transition-all duration-700 ease-out transforms  ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <form className="bg-color border-2 brd-neon p-8 rounded-2xl hover:scale-105 transition-transform shadow-lg flex flex-col gap-3 w-96">
        <h1 className="text-3xl font-bold text-center txt-neon txt-neon-hover ">
          SE Factory Clone
        </h1>
        <p className="text-white ">
          This SE Factory clone showcases impressive front-end craftsmanship,
          blending React, HTML, CSS, and JavaScript into a polished and dynamic
          UI/UX experience. Every section is structured with clarity, smooth
          interactions, and thoughtful responsive design. The neon-styled
          elements add a modern visual spark, elevating the overall aesthetic
          while keeping the layout intuitive and accessible. A sharp,
          well-executed remake that proves strong attention to detail and
          real-world front-end skill.
        </p>
      </form>
    </div>
  );
}
