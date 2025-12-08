import React from "react";
import { Link } from "react-scroll";
// import { Element } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="opacity-90 bg-black sticky top-0 z-50 text-white p-4 w-screen flex justify-between border-b-2 border-lime-200">
      {/* nav element main purpose to groups navigating element reading it easily */}
      <div>
        <Link
          to="home"
          smooth={true}
          duration={650}
          className="pl-5 font-bold text-lime-300 hover:text-lime-400"
        >
          PORTFOLIO.DEV
        </Link>
        {/* Link used to scroll to the section name attribute value */}
      </div>
      <div className="flex font-bold text-sm align-middle gap-6 pr-2">
        <Link
          to="home"
          smooth={true}
          duration={650}
          className="hover:text-lime-400"
        >
          Home
        </Link>
        {/* Link used to scroll to the section name attribute value */}

        <Link
          to="projects"
          smooth={true}
          duration={650}
          className="hover:text-lime-400"
        >
          Projects
        </Link>
        {/* Link used to scroll to the section name attribute value */}

        <Link
          to="aboutme"
          smooth={true}
          duration={650}
          className="hover:text-lime-400"
        >
          About Me
        </Link>
        {/* Link used to scroll to the section name attribute value */}

        <Link
          to="contact"
          smooth={true}
          duration={650}
          className="hover:text-lime-400"
        >
          Contact
        </Link>
        {/* Link used to scroll to the section name attribute value */}
      </div>
    </nav>
  );
}
