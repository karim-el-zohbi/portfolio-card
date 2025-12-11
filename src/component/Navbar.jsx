import React, { useState } from "react";
import { Link } from "react-scroll";
import useScrollDirection from "../hooks/useScrollDirection";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // state for mobile menu toggle
  // const [hideNav, setHideNav] = useState(false);
  // const [lastScrollY, setLastScrollY] = useState(0);
  const scrollup = useScrollDirection();

  // React.useEffect(() => {
  //   const controlNavbar = () => {
  //     if (window.innerWidth < 768) {
  //       if (window.scrollY > lastScrollY) {
  //         setHideNav(true); // scrolling down → hide
  //       } else {
  //         setHideNav(false); // scrolling up → show
  //       }
  //       setLastScrollY(window.scrollY);
  //     }
  //   };

  //   window.addEventListener("scroll", controlNavbar);
  //   return () => window.removeEventListener("scroll", controlNavbar);
  // }, [lastScrollY]);

  return (
    <nav
      className={`opacity-90 bg-color sticky top-0 z-50 text-white border-b-2 border-lime-200 w-full max-w-[100vw] overflow-x-hidden
    transition-transform duration-300
    ${scrollup ? "-translate-y-full" : "translate-y-0"}
  `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <div>
          <Link
            to="home"
            smooth={true}
            duration={650}
            className="font-bold text-lime-300 hover:text-lime-400 text-lg"
          >
            PORTFOLIO.DEV
          </Link>
          {/* Link used to scroll to the section named "home" */}
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 font-bold text-sm">
          <Link
            to="home"
            smooth={true}
            duration={650}
            className="hover:text-lime-400"
          >
            Home
          </Link>
          {/* Link used to scroll to the section named "home" */}

          <Link
            to="projects"
            smooth={true}
            duration={650}
            className="hover:text-lime-400"
          >
            Projects
          </Link>
          {/* Link used to scroll to the section named "projects" */}

          <Link
            to="aboutme"
            smooth={true}
            duration={650}
            className="hover:text-lime-400"
          >
            About Me
          </Link>
          {/* Link used to scroll to the section named "aboutme" */}

          <Link
            to="contact"
            smooth={true}
            duration={650}
            className="hover:text-lime-400"
          >
            Contact
          </Link>
          {/* Link used to scroll to the section named "contact" */}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-lime-300 hover:text-lime-400 focus:outline-none"
          >
            {isOpen ? "✖" : "☰"}
            {/* Toggle button: hamburger (☰) or close (✖) */}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black px-4 pb-4 space-y-2 text-center font-bold">
          <Link
            to="home"
            smooth={true}
            duration={650}
            offset={-100}
            className="block hover:text-lime-400"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          {/* Link used to scroll to the section named "home" */}

          <Link
            to="projects"
            smooth={true}
            duration={650}
            offset={-100}
            className="block hover:text-lime-400"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          {/* Link used to scroll to the section named "projects" */}

          <Link
            to="aboutme"
            smooth={true}
            duration={650}
            offset={-100}
            className="block hover:text-lime-400"
            onClick={() => setIsOpen(false)}
          >
            About Me
          </Link>
          {/* Link used to scroll to the section named "aboutme" */}

          <Link
            to="contact"
            smooth={true}
            duration={650}
            offset={-100}
            className="block hover:text-lime-400"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          {/* Link used to scroll to the section named "contact" */}
        </div>
      )}
    </nav>
  );
}
