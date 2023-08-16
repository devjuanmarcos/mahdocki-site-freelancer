import styles from "./TrackerPage.module.css";
import React from "react";

export default function TrackerPage() {
  return (
    <div className={styles.main}>
      <div className={styles.info}>
        <h1 className={styles.title}>
          Rastreie e controle seu veículo direto do seu celular
        </h1>
        <p>Paragraph</p>
        <p>Paragraph2</p>
        <div>
          <img
            src=''
            alt=''
          />
          <img
            src=''
            alt=''
          />
        </div>
      </div>
      <div className={styles.images}>
        <img
          className={styles.image}
          src='https://www.datocms-assets.com/16903/1690573994-imagem-acionamento-3-lp.png?auto=compress&dpr=0.26&fm=webp&w=2834'
          alt='CellPhone '
        />
      </div>
    </div>
  );
}
