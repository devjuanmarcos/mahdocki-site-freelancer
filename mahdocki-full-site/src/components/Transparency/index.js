import styles from "./Transparency.module.css";
import React from "react";
import contract from "assets/images/contract.png";

export default function Transparency() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img
          className={styles.image}
          src={contract}
          alt='Contract icon'
        />
        <h1 className={styles.title}> Sempre bom ser transparente! </h1>
        <p className={styles.paragraph}>
          {" "}
          Aqui na Mahdocki nós prezamos pela total transparência dos nossos
          serviços prestados. Fique a vontade para ler todo o conteúdo e debater
          suas dúvidas com o nosso suporte.{" "}
        </p>
        <button className={styles.button} />
      </div>
    </div>
  );
}
