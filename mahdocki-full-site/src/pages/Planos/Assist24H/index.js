import styles from "./Assist24H.module.css";

import React from "react";
import geral from "assets/Json/assist.json";
import SeeToo from "components/InfoSpacing/Promo";
import BannerModel from "components/Banner/BannerModel";
import PresentationCard from "components/Card/PresentationCard";
import assistBannerImage from "assets/images/Car rental-amico (2).svg";
import InfoSpacing from "components/InfoSpacing/InfoSpacing";

export default function Assist24H() {
  return (
    <div className={styles.main}>
      <div className={styles.banner}>
        <BannerModel
          image={assistBannerImage}
          title={"Tenha assistência 24 horas e fique totalmente respaldado"}
          paragraph={
            "Custando menos de 2,33 por dia, os planos de assistência veicular 24h da S.O.S Mahdocki abrangem incidentes como panes secas, colisões, panes mecânicas, problemas elétricos e serviços de chaveiro, destacando-se pelo eficiente serviço de reboque. Prontos para intervir em emergências, garantimos que você possa continuar sua viagem com total tranquilidade. Contrate agora e cancele quando desejar, sem fidelidade, proporcionando total flexibilidade para se adaptar às suas necessidades, oferecendo proteção acessível ao seu bem-estar."
          }
        />
      </div>

      <PresentationCard
        databaseInfo={geral}
        title='Projetado diversos serviços para oferecer suporte em várias situações
          de emergência:'
      />

      <InfoSpacing
        monthly={69}
        name={"ASSISTÊNCIA 24H AUTO"}
        plan={true}
        h2={"Contrate agora nosso plano"}
      />

      <SeeToo />
    </div>
  );
}
