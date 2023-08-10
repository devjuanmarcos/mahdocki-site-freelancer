import React from "react";
import styles from "./Button.module.css";

export default function Button({ link, children }) {
  const handleClick = () => {
    window.location.href = link;
  };
  return (
    <button
      className={`${styles["custom-btn"]} ${styles["btn-14"]} }`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
