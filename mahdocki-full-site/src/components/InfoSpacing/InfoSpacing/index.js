import Button from "components/Button";
import styles from "./InfoSpacing.module.css";
import globalStyles from "styles/globalText.module.css";
import React, { useEffect, useState } from "react";

export default function InfoSpacing({ src, h2, p1, p2, color, direction }) {
  // eslint-disable-next-line
  const [flexDirection, setFlexDirection] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 375) {
      setFlexDirection("column");
    } else {
      setFlexDirection(direction);
    }
  }, [direction]);

  return (
    <div
      className={styles.container}
      style={{ backgroundColor: color }}
    >
      <div
        className={styles.info}
        style={{ flexDirection: InfoSpacing }}
      >
        <img
          className={styles.img}
          src={src}
          alt='info spacing'
        />
        <div className={styles.texts}>
          <h2 className={globalStyles.globalH3}>{h2}</h2>
          <p className={globalStyles.globalPBig}>{p1}</p>
          <p className={globalStyles.globalPBig}>{p2}</p>
        </div>
      </div>
      <div className={styles.button}>
        <Button
          link='/home'
          children='Receber desconto'
        />
      </div>
    </div>
  );
}
