import React from "react";
import styles from "./AnimatedImage.module.css";
import Car from "assets/images/car.png";
export default function AnimatedImage() {
  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src={Car}
        alt='Imagem animada'
      />
    </div>
  );
}
