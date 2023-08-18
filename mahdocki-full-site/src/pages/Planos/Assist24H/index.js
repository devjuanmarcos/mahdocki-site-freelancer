import Banner from "components/Banner";
import styles from "./Assist24H.module.css";
import React from "react";
import WeCover from "components/WeCover";
import ListText from "components/ListText";
import assist from "assets/Json/assist.json";

export default function Assist24H() {
  return (
    <div>
      <div className={styles.banner}>
        <Banner
          title={"Tenha assistência 24 horas e fique totalmente respaldado"}
          paragraph={
            "Cobrimos uma ampla variedade de incidentes, como panes secas, colisões, panes mecânicas, problemas elétricos e serviços de chaveiro, com destaque para nosso serviço de reboque. Estamos prontos para ajudar em emergências, garantindo que você possa seguir sua viagem com tranquilidade."
          }
        />
      </div>
      <ListText
        title='Projetado diversos serviços para oferecer suporte em várias situações de emergência:'
        itens={assist}
      />
      <WeCover
        cover='var(--branco-medio)'
        title='var(--preto)'
        paragraph='var(--cinza)'
      />
    </div>
  );
}
