import React from "react";
import Banner from "components/Banner";
import TitleParagraph from "components/TitleParagraph";
import styles from "./Home.module.css";
import Carrossel from "components/Carousel";
import InfoSpacing from "components/InfoSpacing";
import WeCover from "components/WeCover";
import MainToppings from "components/MainToppings";
import Carousel from "components/RattingCarousel";
import Card from "components/Card";
import review from "assets/images/review.png";
import NotCover from "components/NotCover";
import CardData from "../../components/NotCover/cardsData.json";

export default function Home() {
  return (
    <main>
      <div>
        <Banner />
        <TitleParagraph />
        <Carrossel />
        <div className={styles.linkCarousel}>
          <a
            className={styles.link}
            href='#cover'
          >
            Saiba mais sobre as coberturas
          </a>
        </div>
        <InfoSpacing
          src='https://www.datocms-assets.com/16903/1594322322-car-gol-front-01-4x3-light.png'
          h2='Traga seu amigo/familiar e ganhe um mega desconto!'
          p1='Promoção Comunidade Segura: Na compra de dois planos a próxima mensalidade sai com 40% de desconto.'
          p2='Ah, e sem contar que você e seu amigo ainda participam do nosso sorteio de fim de ano!'
        />
      </div>
      <div
        id='cover'
        className={styles.anchorOffset}
      ></div>
      <div className={styles.cover}>
        <WeCover />
      </div>
      <div>
        <MainToppings
          h2='Principais coberturas da Mahdocki'
          p='Os serviços mais procurados pelos nossos clientes nos últimos meses'
          img1='https://www.datocms-assets.com/16903/1577197391-coveragesteal-thefthd4x3light-2x.png?auto=compress&dpr=1&fm=webp&w=186'
          imgt1='Equipe pronta resposta'
          imgp1='Caso seu carro seja roubado ou furtado nós bloqueamos e efetuamos tentativa de recuperação.'
          img2='https://www.datocms-assets.com/16903/1577197391-coveragesteal-thefthd4x3light-2x.png?auto=compress&dpr=1&fm=webp&w=186'
          imgt2='Equipe pronta resposta'
          imgp2='Caso seu carro seja roubado ou furtado nós bloqueamos e efetuamos tentativa de recuperação.'
          img3='https://www.datocms-assets.com/16903/1577197391-coveragesteal-thefthd4x3light-2x.png?auto=compress&dpr=1&fm=webp&w=186'
          imgt3='Equipe pronta resposta'
          imgp3='Caso seu carro seja roubado ou furtado nós bloqueamos e efetuamos tentativa de recuperação.'
        />
      </div>
      <div className={styles.size}>
        <div className={styles.global}>
          <h1 className={styles.title}>
            As opiniões dos nossos clientes deixam bem claro a qualidade do
            serviço que oferecemos!
          </h1>
          {/* <p className={styles.paragraph}>
            Quer saber o que as pessoas acham da nossa empresa? Então é só dar
            uma olhada aqui embaixo e conferir a opinião dos nossos clientes
            sobre a Mahdocki
          </p> */}
          <div className={styles.imgCaro}>
            <img
              className={styles.imgs}
              src={review}
              alt='carousel imagge teste'
            />
            <Carousel />
          </div>
          <div className={styles.card}>
            <Card />
          </div>
        </div>
      </div>
      <div className={styles.notCover}>
        <NotCover cards={CardData} />
      </div>
    </main>
  );
}
