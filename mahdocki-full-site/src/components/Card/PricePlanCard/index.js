import styles from "./PricePlanCard.module.css";
import globalStyles from "styles/globalText.module.css";

import React from "react";

function PriceMap({ monthly, name, accession, link }) {
  const ClickLink = () => {
    window.location.href = link;
  };
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.tuition}>
          <h3
            className={globalStyles.globalH3}
            style={{ color: "var(--branco)", fontSize: "16px", margin: "0px" }}
          >
            Mensalidade:
          </h3>
          <div className={styles.line1}>
            <h3 className={styles.miniText}>R$</h3>
            <h3 className={styles.priceText}>{monthly}</h3>
            <h3 className={styles.miniText}>,99</h3>
          </div>
        </div>
        <div
          className={styles.bannerLine}
          onClick={ClickLink}
        >
          <h3 className={styles.textLine}>{name}</h3>
        </div>
        <div className={styles.accession}>
          <h3
            className={globalStyles.globalH3}
            style={{ color: "var(--branco)", fontSize: "16px", margin: "0px" }}
          >
            Adesão:
          </h3>
          <div className={styles.line1}>
            <h3 className={styles.miniText}>R$</h3>
            <h3 className={styles.priceText}>{accession}</h3>
            <h3 className={styles.miniText}>,99</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PricePlanCard({ infos }) {
  return (
    <div className={styles.mapContent}>
      {infos.map((info, id) => (
        <PriceMap
          key={id}
          monthly={info.monthly}
          name={info.name}
          accession={info.accession}
          link={info.link}
        />
      ))}
    </div>
  );
}
