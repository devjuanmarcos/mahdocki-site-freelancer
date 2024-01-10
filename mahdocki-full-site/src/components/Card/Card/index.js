import React from "react";
import styles from "./Card.module.css";
import globalStyles from "styles/globalText.module.css";
import Button from "components/Button";

const mensage = `Ola, como vai? Tenho interesse nos serviços que vi no site Mahdocki e gostaria de mais informações.`;

const codifyMensage = encodeURIComponent(mensage);

const numberWpp = "+5521970935103";
const linkWpp = `https://wa.me/${numberWpp}/?text=${codifyMensage}`;

export default function Card({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3 className={`${globalStyles.globalP} ${styles.text}`}>
          {children
            ? children
            : "Contrate os planos a partir de R$ 39,99/mês. Confira sem sair de casa!"}
        </h3>
      </div>
      <Button
        children={"EU QUERO!"}
        link={linkWpp}
      />
    </div>
  );
}
