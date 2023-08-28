import styles from "./Error.module.css";
import globalStyles from "styles/globalText.module.css";
import React from "react";
import errorBannerImage from "assets/images/error404.svg";
import Button from "components/Button";
import MiniCard from "components/Card/MiniCard";

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
          <h1 className={globalStyles.globalH1}>
            Ops! Tivemos um pequeno erro.
          </h1>
          <p
            className={globalStyles.globalH2}
            style={{ color: "var(--branco)" }}
          >
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
