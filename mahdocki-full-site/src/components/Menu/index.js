import React from "react";
import stylesMenu from "./Menu.module.css";
import MenuLink from "../MenuLink";

export default function Menu() {
  return (
    <header className={stylesMenu.principalContainer}>
      <div className={stylesMenu.containerFull}>
        <div className={stylesMenu.navigation}>
          <div className={stylesMenu.completeNavigation}>
            <div className={stylesMenu.mainRoutes}>
              <MenuLink to={"/"}>MAHDOCKI</MenuLink>
              <MenuLink to={"/planos"}>PLANOS</MenuLink>
              <MenuLink to={"/sobre"}>SOBRE A MAHDOCKI</MenuLink>
              <MenuLink to={"/sobre"}>SOBRE A MAHDOCKI</MenuLink>
              <MenuLink to={"/sobre"}>SOBRE A MAHDOCKI</MenuLink>
            </div>
            <div>
              <MenuLink to={"/ajuda"}>AJUDA</MenuLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
