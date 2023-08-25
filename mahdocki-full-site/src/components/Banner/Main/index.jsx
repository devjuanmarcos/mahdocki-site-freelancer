import React from "react";
import styles from "./Banner.module.css";
import globalStyles from "styles/globalText.module.css";
import AnimatedImage from "components/Car/AnimatedImage";
import Card from "components/Card";

export default function Banner({ title, paragraph }) {
  return (
    <div className={styles.banner}>
      <AnimatedImage />
      <div className={styles.text}>
        <h2 className={globalStyles.globalH1}>{title}</h2>
        <p className={globalStyles.globalP}>{paragraph}</p>
      </div>
      <Card />
      <p className={globalStyles.obs}>
        O valor pode sofrer alterações devido a época do ano, região ou tipo de
        veículo.
      </p>
      <section className={styles.backCurve} />
    </div>
  );
}
