import React, { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    function onScroll() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(Number(scrolled.toFixed(2)));

      // if user scrolls a little → show
      if (scrollTop > 40) setShow(true);
      else setShow(false);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      className={`
        fixed top-0 left-0 w-full z-60 pointer-events-none
        transition-all duration-300 ease-out
        ${show ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"}
      `}
      style={{ transformOrigin: "top" }}
    >
      <div className="h-1 w-full bg-black/0">
        <div
          aria-hidden
          className="h-1 bg-neon shadow-[0_0_8px_rgba(132,204,22,0.9)] transition-all duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
