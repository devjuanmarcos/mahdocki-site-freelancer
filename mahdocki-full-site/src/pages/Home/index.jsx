import React from "react";
import Banner from "components/Banner";
import TitleParagraph from "components/TitleParagraph";
import MiniCard from "components/MiniCard";
import styles from "./Home.module.css";
import car from "assets/images/car.png";
import Carrossel from "components/Carousel";
//prettier-ignore

export default function Home() {
  return (
    <main>
      <div>
        <Banner />
        <TitleParagraph />
        <Carrossel/>
        {/* <section className={styles.cardBlock}>
          <MiniCard children='Anti roubo' image={car} alt='olá'/>
          <MiniCard />
          <MiniCard />
          <MiniCard />
          <MiniCard />
          <MiniCard />
          <MiniCard />
          <MiniCard />
          <MiniCard />
        </section> */}
        <div className={styles.linkCarousel} >
          <a href='/home'>Saiba mais sobre as coberturas</a>
        </div>
      </div>
    </main>
  );
}
