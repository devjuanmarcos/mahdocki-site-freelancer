import styles from "./MainPlans.module.css";
import React from "react";
import BannerModel from "components/Banner/BannerModel";
import bannerImage from "assets/images/plansBannerImage (2).svg";
import TopPlans from "components/InfoSpacing/TopPlans";
import SeeToo from "components/InfoSpacing/Promo";

export default function MainPlans() {
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <BannerModel
          image={bannerImage}
          title={"Os melhores planos para cobrir todas as suas necessidades"}
          paragraph={
            "Fique totalmente respaldado em todos os tipos de ocasiões. Oferecemos uma vasta carga de vantagens para você e sua família. Confirma abaixo!"
          }
        />
      </div>
      <TopPlans />
      <SeeToo />
    </div>
  );
}
