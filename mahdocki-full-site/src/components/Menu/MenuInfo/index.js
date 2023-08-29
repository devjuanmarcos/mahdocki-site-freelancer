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
          <MenuList
            to={"/plans"}
            children='Planos'
          />
          <MenuList
            to={"/assist"}
            children='Assistência técnica 24 horas'
          />
          <MenuList
            to={"/plans"}
            children='Rastreador e bloqueador'
          />
          <MenuList
            to={"/plans"}
            children='Equipe pronta resposta'
          />
          <MenuList
            to={"/plans"}
            children='Suporte'
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
