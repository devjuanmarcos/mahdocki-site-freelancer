import styles from "./TopPlans.module.css";
import React from "react";
import assistBannerImage from "assets/images/Car rental-amico (2).svg";
import readyBannerImage from "assets/images/prontaResposta.svg";
import trackerBannerImage from "assets/images/Carpool-amico.svg";

export default function TopPlans() {
  return (
    <div className={styles.footer}>
      <div className={styles.shape}>
        <svg
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
        >
          <path
            d='M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z'
            className={styles.shapeFill}
          ></path>
        </svg>
      </div>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.card1}>
            <div className={styles.card1Tip}>
              <h2 className={styles.title}>RASTREADOR</h2>
              <h2 className={styles.text}>adesão: R$ 120,00</h2>
              <h2 className={styles.text}>mensalidade: R$ 120,00</h2>
              <img
                className={styles.cardImage}
                src={trackerBannerImage}
                alt='none'
              />
            </div>
          </div>
          <div className={styles.card2}>
            <div className={styles.card2Tip}>
              <h2 className={styles.title}>ASSISTÊNCIA 24H</h2>
              <h2 className={styles.text}>adesão: R$ 120,00</h2>
              <h2 className={styles.text}>mensalidade: R$ 120,00</h2>
              <img
                className={styles.cardImage}
                src={assistBannerImage}
                alt='none'
              />
            </div>
          </div>
          <div className={styles.card3}>
            <div className={styles.card3Tip}>
              <h2 className={styles.title}>PRONTA RESPOSTA</h2>
              <h2 className={styles.text}>adesão: R$ 120,00</h2>
              <h2 className={styles.text}>mensalidade: R$ 120,00</h2>
              <img
                className={styles.cardImage}
                src={readyBannerImage}
                alt='none'
              />
            </div>
          </div>
        </div>
        <h1 className={styles.textFooter}>
          Clique sobre o card para mais informações
        </h1>
      </div>
    </div>
  );
}
