import styles from "./BannerNoCover.module.css";
import React from "react";
import { BiBlock } from "react-icons/bi";
export default function BannerNoCover() {
  return (
    <div className={styles.container}>
      <div className={styles.iconCenter}>
        <BiBlock
          className={styles.icon}
          name='ban-outline'
        ></BiBlock>
      </div>
      <div className={styles.text}>
        <h2 className={styles.h2}>tste1</h2>
        <h4>teste2</h4>
      </div>
      <ion-icon
        className={styles.icon2}
        name='caret-up-outline'
      ></ion-icon>
    </div>
  );
}
