import Button from "components/Button";
import styles from "./InfoSpacing.module.css";
import React from "react";

export default function InfoSpacing({ src, h2, p1, p2 }) {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <img
          className={styles.img}
          src={src}
          alt='info spacing'
        />
        <div className={styles.texts}>
          <h2 className={styles.subtitle}>{h2}</h2>
          <p className={styles.parapgraph}>{p1}</p>
          <p className={styles.parapgraph}>{p2}</p>
        </div>
      </div>
      <div className={styles.button}>
        <Button
          link='/home'
          children='Receber desconto'
        />
      </div>
    </div>
  );
}
