import { NavLink } from "react-router-dom";
import styles from "./MenuLink.module.css";
import React from "react";

export default function MenuList({ children, to }) {
  return (
    <NavLink
      className={`${styles.displayBlock} ${styles.menuLink}`}
      to={to}
      end
    >
      <span className={styles.span}> {children}</span>
    </NavLink>
  );
}
