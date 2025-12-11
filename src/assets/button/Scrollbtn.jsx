import React, { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) setShow(true);
    else setShow(false);
  };

  const goTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={goTop}
      className={`
        fixed bottom-6 right-6 z-50
        bg-neon text-black font-bold p-3 rounded-full shadow-xl
        transition-all duration-300 ease-in-out

        ${
          show
            ? "opacity-100 scale-100"
            : "opacity-0 scale-0 pointer-events-none"
        }
      `}
    >
      ↑
    </button>
  );
}
