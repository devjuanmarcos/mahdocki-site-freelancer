import React from "react";
import styles from "./Banner.module.css";
import AnimatedImage from "components/Car/AnimatedImage";
import Card from "components/Card";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerPadding}>
        <AnimatedImage />
        <h2 className={styles.title}>Assistência 24 horas!</h2>
        <p className={styles.paragraph}>
          Tenha seu carro protegido com a Mahdocki e desfrute da vida sem
          preocupações. Personalize as coberturas e assistências do seu plano e
          pague somente pelo que selecionar.
        </p>
      </div>
      <div className={styles.card}>
        <Card />
        <p>
          {" "}
          O valor pode sofrer alterações devido a época do ano, região ou tipo
          de veículo.{" "}
        </p>
      </div>
      <div className={styles.backCurve}> </div>
    </div>
  );
}
