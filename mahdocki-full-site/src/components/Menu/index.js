import React from "react";
import stylesMenu from "./Menu.module.css";
import MenuLink from "../MenuLink";

export default function Menu() {
  return (
    <header>
      {/* prettier-ignore */}
      <nav className={stylesMenu.navigation}>
        <MenuLink to={"/"}>MAHDOCKI</MenuLink>
        <MenuLink to={"/planos"} >PLANOS</MenuLink>
        <MenuLink to={"/sobre"} >SOBRE A MAHDOCKI</MenuLink>
        <MenuLink to={"/ajuda"} >AJUDA</MenuLink>

      </nav>
    </header>
  );
}
