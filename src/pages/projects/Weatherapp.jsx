import React from "react";
import { useInView } from "react-intersection-observer";
export default function Weatherapp() {
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
          Weather App
        </h1>
        <p className="text-white text-sm">
          This Weather App delivers a sleek modern design powered by real-time
          API integration. The interface is clean, responsive, and
          user-friendly, with smooth transitions and a stylish neon accent that
          gives the experience a fresh, futuristic feel. By fetching live
          weather data through API calls, the app showcases solid JavaScript
          logic, API handling skills, and a polished UI/UX approach. A
          well-built project that blends functionality and modern design
          beautifully.
        </p>
      </div>
    </div>
  );
}
