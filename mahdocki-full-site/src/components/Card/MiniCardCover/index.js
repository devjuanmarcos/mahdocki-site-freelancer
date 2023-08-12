import styles from "./MiniCardCover.module.css";
import React from "react";

export default function MiniCardCover({ children, image, alt }) {
  return (
    <section className={styles.miniCard}>
      <div className={styles.container}>
        <img
          className={styles.imageCard}
          src={image}
          alt={alt}
        />
        <div className={styles.texts}>
          <h3 className={styles.textCard}> {children} </h3>
          <a
            href='/home'
            className={styles.more}
          >
            Saiba mais
          </a>
        </div>
      </div>
    </section>
  );
}
