import React, { useState, useEffect } from "react";

export default function useScrollDirection() {
  const [scrollUp, setScrollUp] = useState(true);
  const [prevScroll, setPrevScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current < prevScroll) {
        setScrollUp(true); // scrolling up
      } else {
        setScrollUp(false); // scrolling down
      }

      setPrevScroll(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScroll]);

  return scrollUp;
}
