import React from "react";
import Banner from "components/Banner";
import TitleParagraph from "components/TitleParagraph";
import styles from "./Home.module.css";
import Carrossel from "components/Carousel";
import InfoSpacing from "components/InfoSpacing";
//prettier-ignore

export default function Home() {
  return (
    <main>
      <div>
        <Banner />
        <TitleParagraph />
        <Carrossel/>
        <div className={styles.linkCarousel} >
          <a  className={styles.link} href='/home'>Saiba mais sobre as coberturas</a>
        </div>
        <InfoSpacing 
        src="https://www.datocms-assets.com/16903/1594322322-car-gol-front-01-4x3-light.png"  
        h2="Traga seu amigo/familiar e ganhe um mega desconto!"
        p1="Promoção Comunidade Segura: Na compra de dois planos a próxima mensalidade sai com 40% de desconto."
        p2="Ah, e sem contar que você e seu amigo ainda participam do nosso sorteio de fim de ano!"
         />

      </div>
    </main>
  );
}
