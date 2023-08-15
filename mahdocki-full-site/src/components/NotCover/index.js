import BannerNoCover from "components/Banner/BannerNoCover";
import styles from "./NotCover.module.css";
import React from "react";

export default function NotCover() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h4>É importante saber</h4>
        <h1>O que não cobrimos</h1>
      </div>
      <div className={styles.banners}>
        <BannerNoCover />
      </div>
    </div>
  );
}
