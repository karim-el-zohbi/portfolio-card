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
      className={`opacity-90 bg-color sticky top-0 z-50 text-white border-b-2 brd-neon w-full  overflow-x-hidden
    transition-transform duration-300
    ${scrollup ? "translate-y-0" : "-translate-y-full"}
  `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <div>
          <Link
            to="home"
            smooth={true}
            duration={650}
            className="font-bold txt-neon txt-neon-hover text-lg"
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
            className="txt-neon-hover"
          >
            Home
          </Link>
          {/* Link used to scroll to the section named "home" */}

          <Link
            to="projects"
            smooth={true}
            duration={650}
            className="txt-neon-hover"
          >
            Projects
          </Link>
          {/* Link used to scroll to the section named "projects" */}

          <Link
            to="aboutme"
            smooth={true}
            duration={650}
            className="txt-neon-hover"
          >
            About Me
          </Link>
          {/* Link used to scroll to the section named "aboutme" */}

          <Link
            to="contact"
            smooth={true}
            duration={650}
            className="txt-neon-hover"
          >
            Contact
          </Link>
          {/* Link used to scroll to the section named "contact" */}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="txt-neon txt-neon-hover focus:outline-none"
          >
            {isOpen ? "✖" : "☰"}
            {/* Toggle button: hamburger (☰) or close (✖) */}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-color px-4 pb-4 space-y-2 text-center font-bold w-full max-w-[100vw] overflow-x-hidden">
          <Link
            to="home"
            smooth={true}
            duration={650}
            offset={-100}
            className="block txt-neon-hover"
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
            className="block txt-neon-hover"
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
            className="block txt-neon-hover"
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
            className="block txt-neon-hover"
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
