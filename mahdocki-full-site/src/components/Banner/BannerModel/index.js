import styles from "./Banner.module.css";
import globalStyles from "styles/globalText.module.css";
import React from "react";
import Card from "components/Card/Card/index";

export default function BannerModel({ title, paragraph, image }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h1 className={globalStyles.globalH1}>{title}</h1>
          <p
            className={globalStyles.globalP}
            style={{ color: "var(--branco)" }}
          >
            {paragraph}
          </p>
          <div className={styles.cardCard}>
            <Card children='Contrate os planos a partir de R$ 39,99/mês. Confira sem sair de casa!' />
          </div>
        </div>
        <div className={styles.images}>
          <img
            className={styles.image}
            src={image}
            alt='none'
          />
        </div>
      </div>
      <div className={styles.backCurve}></div>
    </div>
  );
}
