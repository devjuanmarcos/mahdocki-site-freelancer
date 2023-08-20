import BannerModel from "components/Banner/BannerModel";
import styles from "./Tracker.module.css";
import React from "react";
import bannerImage from "assets/images/Carpool-amico.svg";
import PresentationCard from "components/Card/PresentationCard";
import SeeToo from "components/InfoSpacing/Promo";
import geral from "assets/Json/tracker.json";

export default function Tracker() {
  return (
    <div className={styles.main}>
      <div className={styles.banner}>
        <BannerModel
          image={bannerImage}
          title='Rastreamento em tempo real!'
          paragraph='Um serviço de rastreamento veicular no seu celular oferece conveniência e segurança, permitindo que você acompanhe a localização do seu veículo em tempo real e receba alertas importantes para proteger seu veículo e otimizar sua gestão.'
        />
      </div>
      <PresentationCard databaseInfo={geral} />
      <SeeToo />
    </div>
  );
}
