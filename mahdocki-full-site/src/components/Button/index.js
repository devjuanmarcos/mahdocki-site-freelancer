import React from "react";
import styles from "./Button.module.css";

export default function Button({ children }) {
  return (
    <button className={`${styles["custom-btn"]} ${styles["btn-14"]} }`}>
      {children}
    </button>
  );
}
