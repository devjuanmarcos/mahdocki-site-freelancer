import React from "react";
import styles from "./AnimatedImage.module.css";
import Car from "assets/images/Car rental-amico (1).svg";
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
