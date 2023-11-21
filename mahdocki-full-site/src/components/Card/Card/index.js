import React from "react";
import styles from "./Card.module.css";
import globalStyles from "styles/globalText.module.css";
import Button from "components/Button";

export default function Card({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3 className={`${globalStyles.globalP} ${styles.text}`}>{children}</h3>
      </div>
      <Button
        children={"EU QUERO!"}
        link={"https:/wa.me/+5524981319462"}
      />
    </div>
  );
}
