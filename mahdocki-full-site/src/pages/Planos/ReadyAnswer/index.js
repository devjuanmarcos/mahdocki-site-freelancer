import React from "react";
import styles from "./ReadyAnswer.module.css";
import readyBannerImage from "assets/images/prontaResposta.svg";
import BannerModel from "components/Banner/BannerModel";
import PresentationCard from "components/Card/PresentationCard";
import answer from "assets/Json/answer.json";
import SeeToo from "components/InfoSpacing/Promo";

export default function ReadyAnswer() {
  return (
    <div className={styles.readyAnswer}>
      <div className={styles.banner}>
        <BannerModel
          image={readyBannerImage}
          title='Equipe pronta resposta para recuperar seu veículo roubado'
          paragraph='
          Por apenas 3 reais diários, conte com nossa equipe de pronta resposta que age com rapidez, utilizando a localização do seu veículo como base. Capazes de bloquear e recuperar seu veículo para você, basta entrar em contato imediatamente com nossa central, e nossa equipe cuidará do resto. A melhor parte é que você só paga a franquia caso seu veículo seja recuperado. Incrível, não é mesmo? Garanta essa proteção eficiente e ágil por um investimento acessível.'
        />
      </div>
      <PresentationCard databaseInfo={answer} />
      <SeeToo />
    </div>
  );
}
