import styles from "./MenuInfo.module.css";
import globalStyles from "styles/globalText.module.css";

import MenuList from "components/Menu/MenuList";

import React from "react";

export default function MenuInfo({ goBack }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <ul
          className={`${styles.list} ${globalStyles.globalHeader}`}
          onClick={goBack}
        >
          {/* <MenuList
            to={"/custom"}
            children='Plano customizado'
          /> */}

          <MenuList
            to={"/plans"}
            children='Nossos planos'
          />
          <MenuList
            to={"/tracker"}
            children='Rastreador e bloqueador'
          />
          <MenuList
            to={"/readyanswer"}
            children='Equipe pronta resposta'
          />

          <MenuList
            to={"/plans"}
            children='Sobre nós'
          />
        </ul>
      </div>
    </div>
  );
}
