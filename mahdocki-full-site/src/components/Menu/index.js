import React from "react";
import stylesMenu from "./Menu.module.css";
import MenuLink from "./MenuLink";
import logoMain from "assets/images/logoMain.png";

export default function Menu() {
  return (
    <header className={stylesMenu.principalContainer}>
      <div className={stylesMenu.containerFull}>
        <div className={stylesMenu.navigation}>
          <div className={stylesMenu.completeNavigation}>
            <div className={stylesMenu.mainRoutes}>
              <img
                className={stylesMenu.image}
                src={logoMain}
                alt='none'
              ></img>
              <MenuLink to={"/"}>MAHDOCKI</MenuLink>
              <MenuLink to={"/plans"}>PLANOS</MenuLink>
              <MenuLink to={"/assist"}>ASSISTÊNCIA 24 HORAS</MenuLink>
              <MenuLink to={"/tracker"}>RASTREADOR</MenuLink>
              <MenuLink to={"/sobre"}>PRONTA RESPOSTA</MenuLink>
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
