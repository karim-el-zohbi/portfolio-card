import React from "react";
import { Element } from "react-scroll";
export default function Home() {
  return (
    <Element name="home">
      {/* Element for scrollinng to the section named home */}
      <div className="h-screen w-screen flex flex-col items-center justify-center bg-black  text-white gap-6 pl-2 pr-2">
        <span className=" rounded-xl bg-lime-400 hover:bg-lime-200 text-black font-bold p-1 pr-2 pl-2 align-middle justify-center">
          Available For New Projects
        </span>
        <h1 className="font-bold text-5xl text-center ">
          COMPLEX TECHNICAL CHALLENGES <br />
          ARE TURNED INTO <br />
          SCALABLE DGITAL PRODUCTS
        </h1>
        <p className="text-sm font-bold text-center">
          Passionate web and application developer building fast,secure,and
          scalable software.startups and entrepeneurs are helped to successfully
          launch their tech products
        </p>
        <button className="bg-yellow-700 hover:bg-yellow-500 rounded-2xl p-1 pr-2 pl-2 text-sm font-bold">
          MY PROJECTS
        </button>
      </div>
    </Element>
  );
}
