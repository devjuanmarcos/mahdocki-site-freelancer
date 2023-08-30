import styles from "./TopPlans.module.css";
import globalStyles from "styles/globalText.module.css";

import React from "react";
import PricePlanCard from "components/Card/PricePlanCard";

export default function TopPlans() {
  return (
    <div className={styles.container}>
      <h1 className={`${globalStyles.globalH1} ${styles.title} `}>
        Escolha seu plano de acordo com suas dependências
      </h1>
      <div className={styles.content}>
        <div className={styles.cardBox}></div>
        <PricePlanCard />
        <PricePlanCard />
        <div className={styles.cardBox}></div>
      </div>
    </div>
  );
}
