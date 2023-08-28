import React, { useState } from "react";
import stylesMenu from "./Menu.module.css";
import MenuLink from "./MenuLink";
import MenuInfo from "./MenuInfo";
import logoMain from "assets/images/logoMain.png";

export default function Menu() {
  const [infoTabVisible, setInfoTabVisible] = useState(false);

  const toggleInfoTab = () => {
    setInfoTabVisible(!infoTabVisible);
  };

  return (
    <>
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
                <MenuLink to={"/readyanswer"}>PRONTA RESPOSTA</MenuLink>
              </div>
              <div className={stylesMenu.mainRoutesResp}>
                <MenuLink to={"/"}>
                  <img
                    className={stylesMenu.image}
                    src={logoMain}
                    alt='none'
                  ></img>
                </MenuLink>
                <MenuLink to={"/assist"}>ASSISTÊNCIA 24 HORAS</MenuLink>
              </div>
              <div>
                <button
                  className={stylesMenu.menuButton}
                  onClick={toggleInfoTab}
                >
                  <div className={stylesMenu.button} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      {infoTabVisible && (
        <div className={stylesMenu.fullPageOverlay}>
          <div className={stylesMenu.infoTab}>
            <MenuInfo />
          </div>
        </div>
      )}
    </>
  );
}
