import React from "react";
import styles from "./Card.module.css";
import Button from "components/Button";

export default function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h3 className={styles.text}>
          Assistência automotiva a partir de R$ 60,00 /mês. Confira sem sair de
          casa!
        </h3>
        <Button
          children={"EU QUERO!"}
          link={
            "https://www.youse.com.br/auto/order/10109bb7-6936-48a3-9918-148b5a502405?gclid=CjwKCAjw5remBhBiEiwAxL2M91iXBG7iFHPT2n2EaPEYS9HkJvhAVNU7iF5AzJTWUkM6sbN3jdW5KRoC0-AQAvD_BwE"
          }
        />
      </div>
    </div>
  );
}
