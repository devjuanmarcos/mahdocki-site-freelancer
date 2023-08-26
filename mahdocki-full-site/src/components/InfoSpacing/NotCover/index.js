import BannerNoCover from "components/Banner/BannerNoCover";
import styles from "./NotCover.module.css";
import React from "react";
import globalStyles from "styles/globalText.module.css";

export default function NotCover({ cards }) {
  return (
    <div className={styles.container}>
      <div className={styles.texts}>
        <h3
          className={globalStyles.globalP}
          style={{ color: "var(--branco)" }}
        >
          Importante saber
        </h3>
        <h3
          className={globalStyles.globalH3}
          style={{ color: "var(--branco)" }}
        >
          O que não cobrimos
        </h3>
      </div>
      <div className={styles.cardList}>
        {cards.map((card, index) => (
          <BannerNoCover
            key={index}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
}
