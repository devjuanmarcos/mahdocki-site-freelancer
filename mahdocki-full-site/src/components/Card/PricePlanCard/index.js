import styles from "./PricePlanCard.module.css";
import globalStyles from "styles/globalText.module.css";

import React from "react";

export default function PricePlanCard() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.line1}>
          <h3 style={{ color: "var(--branco)" }}>R$</h3>
          <h3 style={{ color: "var(--branco)" }}>120</h3>
          <h3 style={{ color: "var(--branco)" }}>,99</h3>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
