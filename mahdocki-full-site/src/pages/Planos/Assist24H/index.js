import styles from "./Assist24H.module.css";
import React from "react";
import geral from "assets/Json/geral.json";
import SeeToo from "components/Promo";
import BannerModel from "components/BannerModel";
import PresentationCard from "components/Card/PresentationCard";

export default function Assist24H() {
  return (
    <div className={styles.main}>
      <div className={styles.banner}>
        <BannerModel
          title={"Tenha assistência 24 horas e fique totalmente respaldado"}
          paragraph={
            "Cobrimos uma ampla variedade de incidentes, como panes secas, colisões, panes mecânicas, problemas elétricos e serviços de chaveiro, com destaque para nosso serviço de reboque. Estamos prontos para ajudar em emergências, garantindo que você possa seguir sua viagem com tranquilidade."
          }
        />
      </div>

      <PresentationCard databaseInfo={geral} />
      <SeeToo />
    </div>
  );
}
