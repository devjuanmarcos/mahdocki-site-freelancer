import React, { useState, useEffect } from "react";
import stylesMenu from "./StickyMenu.module.css";
import Menu from "components/Menu";

export default function StickyMenu() {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    const shouldStick = window.scrollY > 0;
    setIsSticky(shouldStick);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${stylesMenu.stickyMenu} ${
        isSticky ? stylesMenu.sticky : ""
      }`}
    >
      <Menu />
    </div>
  );
}
