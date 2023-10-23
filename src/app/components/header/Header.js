"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import logoLarge from "/public/assets/images/logo-devlinks-large.svg";
import logoSmall from "/public/assets/images/logo-devlinks-small.svg";
import LinksButton from "./LinksButton";
import ProfileButton from "./ProfileButton";

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
      <Image
        src={windowWidth >= 768 ? logoLarge : logoSmall}
        alt="devlinks logo"
        width="0"
        height="0"
        sizes="100vw"
      />
      <div className="flex items-center justify-center">
        <LinksButton windowWidth={windowWidth} />
        <ProfileButton windowWidth={windowWidth} />
      </div>
    </header>
  );
}
