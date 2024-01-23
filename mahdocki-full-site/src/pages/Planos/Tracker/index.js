import BannerModel from "components/Banner/BannerModel";
import styles from "./Tracker.module.css";
import React from "react";
import trackerBannerImage from "assets/images/Carpool-amico.svg";
import PresentationCard from "components/Card/PresentationCard";
import SeeToo from "components/InfoSpacing/Promo";
import geral from "assets/Json/tracker.json";
import PlanSpace from "components/InfoSpacing/PlanSpace";

export default function Tracker() {
  return (
    <div className={styles.main}>
      <div className={styles.banner}>
        <BannerModel
          image={trackerBannerImage}
          title='Rastreamento em tempo real!'
          paragraph='
Por apenas 3 reais diários, conte com nossa equipe de pronta resposta que age com rapidez, utilizando a localização do seu veículo como base. Capazes de bloquear e recuperar seu veículo para você, basta entrar em contato imediatamente com nossa central, e nossa equipe cuidará do resto. A melhor parte é que você só paga a franquia caso seu veículo seja recuperado. Incrível, não é mesmo? Garanta essa proteção eficiente e ágil por um investimento acessível.'
        />
      </div>
      <PresentationCard databaseInfo={geral} />
      {/* <PlanSpace
        monthly={39}
        name={"RASTREADOR"}
        accession={"179"}
        plan={true}
        h2={"Aproveite Agora Nossa Oferta Exclusiva!"}
        p1={
          "Desfrute das melhores ofertas e serviços incomparáveis para garantir total respaldo em todas as situações."
        }
      /> */}
      <SeeToo />
    </div>
  );
}
