import styles from "./MainToppings.module.css";
import React from "react";

export default function MainToppings({
  h2,
  p,
  img1,
  img2,
  img3,
  imgt1,
  imgt2,
  imgt3,
  imgp1,
  imgp2,
  imgp3,
}) {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <h2 className={styles.title}>{h2}</h2>
        <p className={styles.paragraph}>{p}</p>
        <div className={styles.boxImage}>
          <div className={styles.imgP}>
            <img
              src={img1}
              alt={imgt1}
            />
            <h4 className={styles.imgTitle}>{imgt1}</h4>
            <p className={styles.imgParagraph}>{imgp1}</p>
          </div>
          <div className={styles.imgP}>
            <img
              src={img2}
              alt={imgt2}
            />
            <h4 className={styles.imgTitle}>{imgt2}</h4>
            <p className={styles.imgParagraph}>{imgp2}</p>
          </div>
          <div className={styles.imgP}>
            <img
              src={img3}
              alt={imgt3}
            />
            <h4 className={styles.imgTitle}>{imgt3}</h4>
            <p className={styles.imgParagraph}>{imgp3}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
