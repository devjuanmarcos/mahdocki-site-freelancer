import styles from "./TitleParagraph.module.css";
import globalStyles from "styles/globalText.module.css";
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
        <h1
          className={globalStyles.globalH1}
          style={{ color: "var(--roxo-escuro)", maxWidth: "800px" }}
        >
          {title}
        </h1>
        <p
          className={globalStyles.globalH2}
          style={{ textAlign: "center" }}
        >
          {paragraph}
        </p>
      </div>
    </section>
  );
}
