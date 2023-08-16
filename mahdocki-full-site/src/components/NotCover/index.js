import BannerNoCover from "components/Banner/BannerNoCover";
import styles from "./NotCover.module.css";
import React from "react";

export default function NotCover({ cards }) {
  return (
    <div className={styles.center}>
      <div className={`${styles.container} ${styles.title}`}>
        <h4>Importante saber</h4>
        <h1>O que não cobrimos</h1>
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
