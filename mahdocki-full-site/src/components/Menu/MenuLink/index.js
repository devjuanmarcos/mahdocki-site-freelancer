import { NavLink } from "react-router-dom";
import stylesMenuLink from "./MenuLink.module.css";
import React from "react";

export default function MenuLink({ children, to }) {
  return (
    <NavLink
      className={`${stylesMenuLink.displayBlock} ${stylesMenuLink.menuLink}`}
      to={to}
      end
    >
      <span className={stylesMenuLink.span}> {children}</span>
    </NavLink>
  );
}
