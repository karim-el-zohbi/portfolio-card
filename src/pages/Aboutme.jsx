import React from "react";
import { Element } from "react-scroll";

export default function AboutMe() {
  const technique = [
    {
      title: "React",
      comp: (
        <img
          src="../src/assets/image/React-icon.svg.png"
          className=" bg-black"
        />
      ),
    },
    {
      title: "Node.js",
      comp: (
        <img src="../src/assets/image/Node.js_logo.svg.png" className=" " />
      ),
    },
    {
      title: "Flutter",
      comp: (
        <img
          src="../src/assets/image/flutter-logo-png_seeklogo-354671.png"
          className=""
        />
      ),
    },
    {
      title: "AWS",
      comp: <img src="../src/assets/image/aws-nobg.svg" className="" />,
    },
    {
      title: "Python",
      comp: (
        <img
          src="../src/assets/image/Python-Logo-Free-Download-PNG.png"
          className=" "
        />
      ),
    },
  ];
  return (
    <Element name="aboutme">
      <div className="w-screen min-h-screen flex flex-col items-center justify-center p-8 bg-black">
        {/* Header */}
        <h1 className="text-5xl font-bold text-white mt-10 text-center">
          ABOUT ME
        </h1>

        {/* Container for text + image */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 max-w-6xl">
          {/* Text section */}
          <div className="flex flex-col gap-6 mt-1 md:w-1/2">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl text-lime-300">Building Solutions</h2>
              <p className="text-white">
                software and app developer shame on you wazzzzzzup
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-3xl text-lime-300">What Are my Techniques</h2>
              <div className="flex flex-wrap gap-6 mt-4">
                {/* technique.map loops over the array */}
                {technique.map((t, i) => (
                  <div key={i} className="flex flex-col items-center">
                    {/* div key{i} for each object inside the array display => */}
                    <div className="w-12 h-12">{t.comp}</div>
                    <p className="text-white mt-2">{t.title}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl text-lime-300">Outside Coding World</h2>
              <p className="text-white">i'm really angry</p>
            </div>
          </div>

          {/* Image section */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <img
              src="../src/assets/image/profile.jpg" // add your profile image path here
              alt="profile"
              className=" object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </Element>
  );
}
