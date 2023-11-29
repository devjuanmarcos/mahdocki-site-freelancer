import React from "react";
import styles from "./AnimatedImage.module.css";
import bannerImageMain from "assets/images/png logo sos mahdocki.png";
export default function AnimatedImage() {
  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src={bannerImageMain}
        alt='Imagem animada'
      />
    </div>
  );
}
