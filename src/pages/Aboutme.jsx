import React from "react";
import { Element } from "react-scroll";

export default function AboutMe() {
  const technique = [
    {
      title: "React",
      comp: (
        <img
          src="../src/assets/image/React-icon.svg.png"
          className="w-12 h-12"
        />
      ),
    },
    {
      title: "Node.js",
      comp: (
        <img
          src="../src/assets/image/Node.js_logo.svg.png"
          className="w-12 h-12"
        />
      ),
    },
    {
      title: "Flutter",
      comp: (
        <img
          src="../src/assets/image/flutter-logo-png_seeklogo-354671.png"
          className="w-12 h-12"
        />
      ),
    },
    {
      title: "AWS",
      comp: (
        <img src="../src/assets/image/aws-nobg.svg" className="w-12 h-12" />
      ),
    },
    {
      title: "Python",
      comp: (
        <img
          src="../src/assets/image/Python-Logo-Free-Download-PNG.png"
          className="w-12 h-12"
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
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 max-w-6xl mt-8">
          {/* Text section */}
          <div className="flex flex-col gap-6 md:w-1/2">
            {/* About description */}
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl text-lime-300">Building Solutions</h2>
              <p className="text-white">
                Software and app developer — shame on you, wazzzzzzup!
              </p>
            </div>

            {/* Technique section */}
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl text-lime-300">What Are My Techniques</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mt-4 justify-items-center">
                {/* technique.map loops over the array */}
                {technique.map((t, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center p-2 bg-black border-2 border-lime-300  rounded-lg shadow-md transform transition-transform duration-300 hover:scale-110"
                  >
                    {/* div key{i} for each object inside the array display => */}
                    <div className="">{t.comp}</div>
                    <p className="text-white mt-2 font-semibold text-center">
                      {t.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Outside coding */}
            <div className="flex flex-col gap-2 mt-4">
              <h2 className="text-3xl text-lime-300">Outside Coding World</h2>
              <p className="text-white">I'm really angry</p>
            </div>
          </div>

          {/* Image section */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <img
              src="../src/assets/image/profile.jpg"
              alt="profile"
              className="object-cover shadow-lg rounded-lg"
            />
          </div>
        </div>
      </div>
    </Element>
  );
}
