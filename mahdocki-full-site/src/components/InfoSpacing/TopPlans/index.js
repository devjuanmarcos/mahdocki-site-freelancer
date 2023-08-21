import styles from "./TopPlans.module.css";
import React from "react";

export default function TopPlans() {
  return (
    <div className={styles.footer}>
      <div className={styles.shape}>
        <svg
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
        >
          <path
            d='M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z'
            className={styles.shapeFill}
          ></path>
        </svg>
      </div>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.card1}>
            <div className={styles.card1Tip}></div>
          </div>
          <div className={styles.card2}>
            <div className={styles.card2Tip}>
              <h2 className={styles.title}>ASSISTÊNCIA 24H</h2>
            </div>
          </div>
          <div className={styles.card3}>
            <div className={styles.card3Tip}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
