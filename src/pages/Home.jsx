import React from "react";
import { Element } from "react-scroll";

export default function Home() {
  return (
    <Element name="home">
      {/* Main Home Section */}
      <div className="h-screen w-full max-w-[100vw] flex flex-col items-center justify-center bg-black text-white gap-6 px-4 sm:px-8">
        {/* Availability badge */}
        <span className="rounded-xl bg-lime-400 hover:bg-lime-200 text-black font-bold p-1 pr-2 pl-2 text-center">
          Available For New Projects
        </span>

        {/* Main heading */}
        <h1 className="font-bold text-4xl sm:text-5xl text-center leading-snug">
          COMPLEX TECHNICAL CHALLENGES <br />
          ARE TURNED INTO <br />
          SCALABLE DIGITAL PRODUCTS
        </h1>

        {/* Subheading */}
        <p className="text-sm sm:text-base font-bold text-center">
          Passionate web and application developer building fast, secure, and
          scalable software. Startups and entrepreneurs are helped to
          successfully launch their tech products.
        </p>

        {/* Button */}
        <button className="bg-yellow-700 hover:bg-yellow-500 rounded-2xl p-2 px-4 text-sm sm:text-base font-bold">
          MY PROJECTS
        </button>
      </div>
    </Element>
  );
}
