import React, { useState } from "react";
import styles from "./Menu.module.css";
import globalStyles from "styles/globalText.module.css";

import MenuLink from "components/Menu/MenuLink";
import MenuInfo from "components/Menu/MenuInfo";
import logoMain from "assets/images/logoMain.png";

export default function Menu() {
  const [infoTabVisible, setInfoTabVisible] = useState(false);

  const toggleInfoTab = () => {
    setInfoTabVisible(!infoTabVisible);
  };

  return (
    <>
      <header className={styles.principalContainer}>
        <div className={styles.containerFull}>
          <div className={styles.navigation}>
            <div className={styles.completeNavigation}>
              <div className={styles.mainRoutes}>
                <img
                  className={styles.image}
                  src={logoMain}
                  alt='none'
                ></img>
                <MenuLink to={"/"}>MAHDOCKI</MenuLink>
                <MenuLink to={"/plans"}>PLANOS</MenuLink>
                {/* <MenuLink to={"/custom"}>MONTE SEU PLANO</MenuLink> */}
                <MenuLink to={"/assist"}>ASSISTÊNCIA 24 HORAS</MenuLink>
                <MenuLink to={"/tracker"}>RASTREADOR</MenuLink>
                <MenuLink to={"/readyanswer"}>PRONTA RESPOSTA</MenuLink>
              </div>
              <div className={styles.menuCell}>
                <div className={styles.mainRoutesResp}>
                  <MenuLink to={"/"}>
                    <h1
                      className={globalStyles.globalH2}
                      style={{ color: "var(--branco)", fontSize: "20px" }}
                    >
                      MAHDOCKI
                    </h1>
                  </MenuLink>
                </div>
              </div>
              <div>
                <div
                  className={styles.button}
                  onClick={toggleInfoTab}
                >
                  <span className={styles.span}>MENU</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {infoTabVisible && (
        <div className={styles.fullPageOverlay}>
          <div className={styles.infoTab}>
            <MenuInfo goBack={toggleInfoTab} />
            {/* Ao clicar vai chamar a função do menu novamente o fazendo fechá-lo */}
          </div>
        </div>
      )}
    </>
  );
}
