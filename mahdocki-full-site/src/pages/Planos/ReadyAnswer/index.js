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
          paragraph='Nossa equipe de pronta resposta age com rapidez, tomando como base a localização do seu veículo, e é capaz de bloqueá-lo e recuperá-lo para você. Tudo o que você precisa fazer é entrar em contato imediatamente com nossa central, e nossa equipe cuidará do resto. A melhor parte é que você só paga a franquia caso seu veículo seja recuperado. Isso é incrível, não é mesmo'
        />
      </div>
      <PresentationCard databaseInfo={answer} />
      <SeeToo />
    </div>
  );
}
