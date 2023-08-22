import styles from "./Error.module.css";
import React from "react";
import errorBannerImage from "assets/images/error404.svg";
import Button from "components/Button";

export default function Error404() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img
          className={styles.image}
          src={errorBannerImage}
          alt='none'
        />
        <div className={styles.text}>
          <h1 className={styles.title}>
            Ops! Parece que essa página não está disponível no momento.
          </h1>
          <p className={styles.paragraph}>
            Tente voltar para a página principal e começar novamente.
          </p>
          <Button
            link={"/"}
            children={"Voltar"}
          />
        </div>
      </div>
    </div>
  );
}
