import styles from "./TitleParagraph.module.css";
import React from "react";

export default function TitleParagraph({
  title,
  paragraph,
  subtitle,
  paragraph2,
}) {
  return (
    <section className={styles.container}>
      <div className={styles.info}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.paragraph}>{paragraph}</p>
      </div>
      <div className={styles.container2}>
        <h2 className={styles.subtitle}> {subtitle} </h2>
        <p className={styles.paragraph}>{paragraph2}</p>
      </div>
    </section>
  );
}
