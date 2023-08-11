import styles from "./MiniCard.module.css";
import React from "react";

export default function MiniCard({ children, image, alt }) {
  return (
    <section className={styles.miniCard}>
      <div className={styles.container}>
        <h3 className={styles.textCard}> {children} </h3>
        <img
          className={styles.imageCard}
          src={image}
          alt={alt}
        />
      </div>
    </section>
  );
}
