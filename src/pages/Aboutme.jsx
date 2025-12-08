import React from "react";
import { Element } from "react-scroll";
import { useInView } from "react-intersection-observer";

export default function AboutMe() {
  const [ref, visible] = useInView();
  const technique = [
    {
      title: "React",
      comp: (
        <img
          src="../src/assets/image/React-icon.svg.png"
          className="w-12 h-12 max-w-full"
        />
      ),
    },
    {
      title: "Node.js",
      comp: (
        <img
          src="../src/assets/image/Node.js_logo.svg.png"
          className="w-12 h-12 max-w-full"
        />
      ),
    },
    {
      title: "Flutter",
      comp: (
        <img
          src="../src/assets/image/flutter-logo-png_seeklogo-354671.png"
          className="w-12 h-12 max-w-full"
        />
      ),
    },
    {
      title: "AWS",
      comp: (
        <img
          src="../src/assets/image/aws-nobg.svg"
          className="w-12 h-12 max-w-full"
        />
      ),
    },
    {
      title: "Python",
      comp: (
        <img
          src="../src/assets/image/Python-Logo-Free-Download-PNG.png"
          className="w-12 h-12 max-w-full"
        />
      ),
    },
  ];

  return (
    <Element name="aboutme">
      <div
        ref={ref}
        className={` w-full max-w-[100vw] min-h-screen flex flex-col items-center justify-center p-4 sm:p-8 bg-black transition-all duration-700 ease-out transform ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Header */}
        <h1 className="text-4xl sm:text-5xl font-bold text-white mt-10 text-center">
          ABOUT ME
        </h1>

        {/* Container for text + image */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 sm:gap-8 max-w-6xl mt-8 w-full">
          {/* Text section */}
          <div className="flex flex-col gap-6 md:w-1/2">
            {/* About description */}
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl sm:text-3xl text-lime-300">
                Building Solutions
              </h2>
              <p className="text-white">
                Software and app developer — shame on you, wazzzzzzup!
              </p>
            </div>

            {/* Technique section */}
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl sm:text-3xl text-lime-300">
                What Are My Techniques
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 sm:gap-6 mt-4 justify-items-center w-full">
                {technique.map((t, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center p-2 bg-black border-2 border-lime-300 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-110"
                  >
                    <div>{t.comp}</div>
                    <p className="text-white mt-2 font-semibold text-center">
                      {t.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Outside coding */}
            <div className="flex flex-col gap-2 mt-4">
              <h2 className="text-2xl sm:text-3xl text-lime-300">
                Outside Coding World
              </h2>
              <p className="text-white">I'm really angry</p>
            </div>
          </div>

          {/* Image section */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <img
              src="../src/assets/image/profile.jpg"
              alt="profile"
              className="object-cover max-w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </Element>
  );
}
