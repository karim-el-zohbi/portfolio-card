import React, { useState, useEffect } from "react";
// Using a simple unicode arrow as an alternative to react-icons
// If you use react-icons, you'd install and import it as before.

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const checkScrollTop = () => {
    // Show button after scrolling 400px down
    if (!showButton && window.pageYOffset > 400) {
      setShowButton(true);
    } else if (showButton && window.pageYOffset <= 400) {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showButton]);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {showButton && (
        <button
          onClick={scrollToTop}
          // Tailwind Classes:
          className="
            bg-lime-600 hover:bg-lime-700 text-white font-bold
            py-3 px-4 rounded-full shadow-lg transition-opacity duration-300
            focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-opacity-75
            opacity-70 hover:opacity-100 transform hover:scale-105
          "
          aria-label="Scroll to top"
          title="Scroll to top"
        >
          {/* Using an SVG icon instead of react-icons */}
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="www.w3.org"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            ></path>
          </svg>
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
