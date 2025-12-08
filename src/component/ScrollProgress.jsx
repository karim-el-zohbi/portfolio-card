import React, { useEffect, useState } from "react";

/**
 * ScrollProgress
 * - shows a thin neon progress bar at top that fills as user scrolls
 * - light, no external libs
 */
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(Number(scrolled.toFixed(2)));
    }

    // set initial
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    // container sits at top of page, below or above navbar depending on where you insert it
    <div className="fixed top-0 left-0 w-full z-60 pointer-events-none">
      {/* background thin line (subtle) */}
      <div className="h-1 w-full bg-black/0">
        {/* progress indicator */}
        <div
          aria-hidden
          className="h-1 bg-lime-400/90 shadow-[0_0_8px_rgba(132,204,22,0.9)] transition-all duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
