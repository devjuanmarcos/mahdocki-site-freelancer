import styles from "./Assist24H.module.css";

import React from "react";
import geral from "assets/Json/assist.json";
import SeeToo from "components/InfoSpacing/Promo";
import BannerModel from "components/Banner/BannerModel";
import PresentationCard from "components/Card/PresentationCard";
import assistBannerImage from "assets/images/Car rental-amico (2).svg";
import PlanSpace from "../../../components/InfoSpacing/PlanSpace";

export default function Assist24H() {
  return (
    <span>Site desativado</span>

    // <div className={styles.main}>
    //   <div className={styles.banner}>
    //     <BannerModel
    //       image={assistBannerImage}
    //       title={"Tenha assistência 24 horas e fique totalmente tranquilo"}
    //       paragraph={
    //         "A partir de 5,70 por dia, os planos de seguro roubo e furto e assistência veicular 24h da S.O.S Mahdocki abrangem incidentes como panes secas, colisões, panes mecânicas, problemas elétricos e serviços de chaveiro, destacando-se pelo eficiente serviço de reboque. Prontos para intervir em emergências, garantimos que você possa continuar sua viagem com total tranquilidade. Contrate agora e cancele quando desejar, sem fidelidade, proporcionando total flexibilidade para se adaptar às suas necessidades, oferecendo proteção acessível ao seu bem-estar."
    //       }
    //     />
    //   </div>

    //   <PresentationCard
    //     databaseInfo={geral}
    //     title='Projetado diversos serviços para oferecer suporte em várias situações
    //       de emergência:'
    //   />

    //   {/* <PlanSpace
    //     monthly={69}
    //     name={"ASSISTÊNCIA 24H AUTO"}
    //     plan={true}
    //     h2={"Aproveite Agora Nossa Oferta Exclusiva!"}
    //     p1={
    //       "Desfrute das melhores ofertas e serviços incomparáveis para garantir total respaldo em todas as situações."
    //     }
    //   /> */}

    //   <SeeToo />
    // </div>
  );
}
