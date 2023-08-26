import styles from "./MainToppings.module.css";
import globalStyles from "styles/globalText.module.css";
import React from "react";

export default function MainToppings({
  h2,
  p,
  img1,
  img2,
  img3,
  imgt1,
  imgt2,
  imgt3,
  imgp1,
  imgp2,
  imgp3,
  color,
}) {
  return (
    <div style={{ backgroundColor: `"${color}"` }}>
      <div className={styles.container}>
        <h2 className={globalStyles.globalH3}>{h2}</h2>
        <p
          className={globalStyles.globalP}
          style={{ marginBottom: "72px" }}
        >
          {p}
        </p>
        <div className={styles.boxImage}>
          <div className={styles.imgP}>
            <img
              src={img1}
              alt={imgt1}
            />
            <h4 className={globalStyles.globalH4}>{imgt1}</h4>
            <p
              className={globalStyles.globalPBig}
              style={{ width: "310px", textAlign: "center" }}
            >
              {imgp1}
            </p>
          </div>
          <div className={styles.imgP}>
            <img
              src={img2}
              alt={imgt2}
            />
            <h4 className={globalStyles.globalH4}>{imgt2}</h4>
            <p
              className={globalStyles.globalPBig}
              style={{ width: "310px", textAlign: "center" }}
            >
              {imgp2}
            </p>
          </div>
          <div className={styles.imgP}>
            <img
              src={img3}
              alt={imgt3}
            />
            <h4 className={globalStyles.globalH4}>{imgt3}</h4>
            <p
              className={globalStyles.globalPBig}
              style={{ width: "310px", textAlign: "center" }}
            >
              {imgp3}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
