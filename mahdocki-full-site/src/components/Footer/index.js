import React from "react";
import styles from "./Footer.module.css";
// import logoMahdocki from "assets/images/logoMain.png";

export default function Rodape() {
  return (
    <>
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
      <footer className={styles.container}>
        <div className={styles.subscribe}></div>
      </footer>
    </>
  );
}
