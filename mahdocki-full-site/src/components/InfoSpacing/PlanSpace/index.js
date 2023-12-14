import Button from "components/Button";
import styles from "./InfoSpacing.module.css";
import globalStyles from "styles/globalText.module.css";
import React, { useEffect, useState } from "react";
import { PriceMap } from "components/Card/PricePlanCard";

export default function PlanSpace({
  src,
  h2,
  p1,
  p2,
  color,
  direction,
  plan,
  monthly,
  name,
  accession,
  link,
}) {
  // eslint-disable-next-line
  const [flexDirection, setFlexDirection] = useState(false);

  return (
    <div
      className={styles.container}
      style={{ backgroundColor: color }}
    >
      <div
        className={styles.info}
        style={{ flexDirection: direction }}
      >
        {plan ? (
          <PriceMap
            monthly={monthly}
            name={name}
            accession={accession}
            link={"https://wa.me/+5521970935103/"}
          />
        ) : undefined}

        <div className={styles.texts}>
          <h2
            className={globalStyles.globalH3}
            style={{ textAlign: "center" }}
          >
            {h2}
          </h2>
          <p
            className={globalStyles.globalPBig && styles.paragraph}
            style={{ textAlign: "center" }}
          >
            {p1}
          </p>
          <p className={globalStyles.globalPBig && styles.paragraph}>{p2}</p>
          <div className={styles.button}>
            <Button children='Receber desconto' />
          </div>
        </div>
      </div>
    </div>
  );
}
