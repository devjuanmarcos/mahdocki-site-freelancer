import React from "react";
import styles from "./Banner.module.css";
import globalStyles from "styles/globalText.module.css";
import AnimatedImage from "components/Car/AnimatedImage";
import Card from "components/Card/Card";

export default function Banner({ title, paragraph }) {
  return (
    <div className={styles.banner}>
      <AnimatedImage />
      <div className={styles.text}>
        <h2
          className={globalStyles.globalH1}
          style={{ color: "var(--preto)" }}
        >
          {title}
        </h2>
        <p
          className={globalStyles.globalP && styles.paragraph}
          style={{ color: "var(--preto)" }}
        >
          {paragraph}
        </p>
      </div>
      <Card children='Contrate os planos a partir de R$ 39,90/mês. Confira sem sair de casa!' />
      <p
        className={globalStyles.obs}
        style={{ color: "var(--preto)" }}
      >
        Faça a sua consulta e garanta rapidamente a segurança e tranquilidade ao
        sair de casa com o seu veículo.
      </p>
      <section className={styles.backCurve} />
    </div>
  );
}
