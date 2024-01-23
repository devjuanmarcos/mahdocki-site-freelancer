import styles from "./TopPlans.module.css";
import globalStyles from "styles/globalText.module.css";

import React from "react";
import PricePlanCard from "components/Card/PricePlanCard";

import plans from "assets/Json/plans2.json";

export default function TopPlans2() {
  return (
    <div className={styles.container}>
      <h1 className={`${globalStyles.globalH3} ${styles.title} `}>
        Plano com seguro adesão
      </h1>
      <p className={`${globalStyles.globalP} ${styles.subtitle} `}>
        Rastreador com bloqueador para o seu veículo
      </p>
      <PricePlanCard infos={plans} />
    </div>
  );
}
