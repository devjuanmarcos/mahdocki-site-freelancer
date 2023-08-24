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
          paragraph='Nossa equipe de pronta resposta age em perfeita harmonia com nosso avançado pacote de rastreamento e bloqueio para proporcionar a mais eficaz tentativa de recuperação do seu veículo. Combinando ação imediata com tecnologia de ponta, garantimos que seu patrimônio seja protegido com rapidez e eficiência'
        />
      </div>
      <PresentationCard databaseInfo={answer} />
      <SeeToo />
    </div>
  );
}
