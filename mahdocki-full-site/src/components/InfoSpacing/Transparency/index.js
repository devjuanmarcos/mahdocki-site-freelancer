import styles from "./Transparency.module.css";
import globalStyles from "styles/globalText.module.css";
import React, { useState } from "react";
import contract from "assets/images/contract.png";

export default function Transparency({ color }) {
  const [hovered, setHovered] = useState(false);
  const handleClick = () => {
    window.location.href = "/assist";
  };
  return (
    <div
      className={styles.container}
      style={{ backgroundColor: color }}
    >
      <div className={styles.content}>
        <img
          className={styles.image}
          src={contract}
          alt='Contract icon'
        />
        <h1 className={globalStyles.globalH1}>
          {" "}
          Sempre bom ser transparente!{" "}
        </h1>
        <p className={globalStyles.globalP2}>
          {" "}
          Aqui na Mahdocki nós prezamos pela total transparência dos nossos
          serviços prestados. Fique a vontade para ler todo o conteúdo e debater
          suas dúvidas com o nosso suporte.{" "}
        </p>
        <button
          className={`${styles.button} ${hovered ? "" : styles.hoverOut}  `}
          onMouseEnter={() => {
            setHovered(true);
          }}
          onMouseLeave={() => {
            setHovered(false);
          }}
          onClick={handleClick}
        >
          Termos de acordo
        </button>
      </div>
    </div>
  );
}
