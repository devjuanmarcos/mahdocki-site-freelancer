import React, { useState } from "react";
import styles from "./MenuClose.module.css";
import CloseButton from "components/Button/CloseButton";

export default function MenuClose() {
  const [bannerVisible, setBannerVisible] = useState(true);

  function closeBanner() {
    setBannerVisible(false);
  }

  const mensage = `Ola, como vai? Tenho interesse nos serviços que vi no site Mahdocki e gostaria de mais informações.`;

  const codifyMensage = encodeURIComponent(mensage);

  const numberWpp = "+5521970935103";
  const linkWpp = `https://wa.me/${numberWpp}/?text=${codifyMensage}`;

  return (
    <div
      className={`${styles.infoBanner} ${!bannerVisible ? styles.hidden : ""}`}
    >
      {bannerVisible && (
        <div className={styles.containerTip}>
          <h1 className={styles.text}>
            Faça agora mesmo sua cotação e garanta já 10% de desconto na adesão.{" "}
            <a
              className={styles.link}
              href={linkWpp}
            >
              Saiba mais
            </a>
          </h1>
          <div style={{ paddingInline: "20px" }}>
            <CloseButton onClick={closeBanner} />
          </div>
        </div>
      )}
    </div>
  );
}
