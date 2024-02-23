import Button from "components/Button";
import styles from "./InfoSpacing.module.css";
import globalStyles from "styles/globalText.module.css";
import React, { useEffect, useState } from "react";
import { PriceMap } from "components/Card/PricePlanCard";

export default function InfoSpacing({
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
  buttonText,
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
            link={link}
          />
        ) : undefined}
        <img
          className={styles.img}
          src={src}
          alt='info spacing'
        />
        <div className={styles.texts}>
          <h2 className={globalStyles.globalH3}>{h2}</h2>
          <p className={globalStyles.globalPBig && styles.paragraph}>{p1}</p>
          <p className={globalStyles.globalPBig && styles.paragraph}>{p2}</p>
        </div>
      </div>
      <div className={styles.button}>
        <Button children={buttonText ?? "FALE COM UM DE NOSSOS ASSISTENTES"} />
      </div>
    </div>
  );
}
