import React from "react";
import styles from "./Banner.module.css";
import AnimatedImage from "components/Car/AnimatedImage";
import Button from "components/Button";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <AnimatedImage />
      <h2 className={styles.title}>Assistência 24 horas!</h2>
      <p className={styles.paragraph}>
        Tenha seu carro protegido com a Mahdocki e desfrute da vida sem
        preocupações. Personalize as coberturas e assistências do seu plano e
        pague somente pelo que selecionar.
      </p>
      <Button children={"Cotar agora!"} />
    </div>
  );
}
