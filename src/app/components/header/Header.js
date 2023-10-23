"use client";
import { useState, useEffect } from "react";

export default function Header() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // set windowWidth state on screen size change
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
    // add event listener
    window.addEventListener("resize", handleWindowResize);
    // remove event listener
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <header className="flex items-center justify-between h-[74px] pr-4 pl-6 mb-4 bg-neutral-500">
    </header>
  );
}
