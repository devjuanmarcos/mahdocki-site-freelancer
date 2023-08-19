import styles from "./SeeToo.module.css";
import React from "react";
import shop from "assets/images/Shop giveaway-pana (1).svg";
import pickup from "assets/images/Pick up truck-rafiki.svg";

export default function SeeToo() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.imageCard}>
          <img
            className={styles.image}
            src={shop}
            alt='none'
          />
        </div>
        <div className={styles.textCard}>
          <h1 className={styles.title}>Aproveita a oferta!</h1>
          <div className={styles.paragraphCard}>
            <p className={styles.paragraph}>
              Na compra de um segundo plano você recebe 20% de desconto!
            </p>
            <img
              className={styles.image2}
              src={pickup}
              alt='none'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
