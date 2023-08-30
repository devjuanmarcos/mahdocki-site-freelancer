import React from "react";
import styles from "./Card.module.css";
import globalStyles from "styles/globalText.module.css";
import Button from "components/Button";

export default function Card({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3 className={`${globalStyles.globalP} ${styles.text}`}>{children}</h3>
      </div>
      <Button
        children={"EU QUERO!"}
        link={
          "https://www.youse.com.br/auto/order/10109bb7-6936-48a3-9918-148b5a502405?gclid=CjwKCAjw5remBhBiEiwAxL2M91iXBG7iFHPT2n2EaPEYS9HkJvhAVNU7iF5AzJTWUkM6sbN3jdW5KRoC0-AQAvD_BwE"
        }
      />
    </div>
  );
}
