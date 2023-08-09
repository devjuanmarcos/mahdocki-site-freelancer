import { NavLink } from "react-router-dom";
import stylesMenuLink from "./MenuLink.module.css";
import React from "react";

export default function MenuLink({ children, to }) {
  return (
    <NavLink
      className={({ isActive }) => `
        ${stylesMenuLink.link}
        ${isActive ? stylesMenuLink.linkHighlighted : ""}
    `}
      to={to}
      end
    >
      {children}
    </NavLink>
  );
}
