import styles from "./TopPlans.module.css";
import globalStyles from "styles/globalText.module.css";

import React from "react";
import PricePlanCard from "components/Card/PricePlanCard";

import plans from "assets/Json/plans.json";

export default function TopPlans() {
  return (
    <div className={styles.container}>
      <h1 className={`${globalStyles.globalH3} ${styles.title} `}>
        Plano completo para automóveis, scooters elétricas e motos em geral
      </h1>
      <p className={`${globalStyles.globalP} ${styles.subtitle} `}>
        Rastreador, assistência 24 horas e pronta resposta
      </p>
      <PricePlanCard infos={plans} />
    </div>
  );
}
