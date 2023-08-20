import styles from "./Banner.module.css";
import React from "react";
import Button from "components/Button";

export default function BannerModel({ title, paragraph, image }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.paragraph}>{paragraph}</p>
          <div className={styles.cardCard}>
            <div className={styles.contentCard}>
              <b className={styles.textCard}>A partir de R$60,00 p/ mês</b>
              <Button
                children={"EU QUERO!"}
                link={
                  "https://www.youse.com.br/auto/order/10109bb7-6936-48a3-9918-148b5a502405?gclid=CjwKCAjw5remBhBiEiwAxL2M91iXBG7iFHPT2n2EaPEYS9HkJvhAVNU7iF5AzJTWUkM6sbN3jdW5KRoC0-AQAvD_BwE"
                }
              />
            </div>
          </div>
        </div>
        <div className={styles.images}>
          <img
            className={styles.image}
            src={image}
            alt='none'
          />
        </div>
      </div>
      <div className={styles.backCurve}></div>
    </div>
  );
}
