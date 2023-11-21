import styles from "./styles.module.css";
import React from "react";
import cardData from "./cardData.json";
import globalStyles from "styles/globalText.module.css";

export default function MainToppings2() {
  return (
    <section className={styles.main}>
      {cardData.map((data) => (
        <div className={styles.container}>
          <div className={styles.title}>
            <h2
              className={globalStyles.globalH3}
              style={{ color: data.textColor }}
            >
              {data.title}
            </h2>
            <p
              className={globalStyles.globalP}
              style={{ color: data.textColor }}
            >
              {data.subtitle}
            </p>
          </div>
          <div className={styles.cardBox}>
            {data.itens.map((item) => (
              <div className={styles.itens}>
                {/* <img
                  src={item.image}
                  alt={item.title}
                /> */}
                <h4
                  className={globalStyles.globalH4}
                  style={{ color: data.textColor }}
                >
                  {item.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
