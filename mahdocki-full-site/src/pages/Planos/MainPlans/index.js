import styles from "./MainPlans.module.css";
import React from "react";
import BannerModel from "components/Banner/BannerModel";
import bannerImage from "assets/images/plansBannerImage (2).svg";
import TopPlans from "components/InfoSpacing/TopPlans";
import SeeToo from "components/InfoSpacing/Promo";
import MainToppings from "components/InfoSpacing/MainToppings";

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
        color='var(--cinza-fundo)'
        textColor='var(--preto)'
      />
      <SeeToo />
    </div>
  );
}
