import styles from "./MainPlans.module.css";
import React from "react";
import BannerModel from "components/Banner/BannerModel";
import bannerImage from "assets/images/plansBannerImage (2).svg";
import TopPlans from "components/InfoSpacing/TopPlans";
import SeeToo from "components/InfoSpacing/Promo";
import MainToppings from "components/InfoSpacing/MainToppings";
import InfoSpacing from "components/InfoSpacing/InfoSpacing";
import rent from "assets/images/Apartment rent-amico.svg";
import truck from "assets/images/Free shipping-amico.svg";
import MainToppings2 from "components/InfoSpacing/MainToppings2";

export default function MainPlans() {
  return (
    <>
      <div className={styles.banner}>
        <BannerModel
          image={bannerImage}
          title={"Os melhores planos para cobrir todas as suas necessidades"}
          paragraph={
            "Fique totalmente respaldado em todos os tipos de ocasiões. Oferecemos uma vasta carga de vantagens para você e sua família. Confirma abaixo!"
          }
        />
      </div>
      <InfoSpacing
        direction='row-reverse'
        src={rent}
        h2='Menos de R$ 2,99 pra você ter seu amparo veicular'
        p1='Oferecemos um serviço de amparo veicular completo por apenas R$ 119,90 mensais, ajudando você em qualquer tipo de situação nas estradas e rodovias.'
        p2='Para verificar todas as funcionalidades do serviço basta preencher o formulário e aguardar a avaliação da proposta.'
        color='var(--cinza-fundo)'
      />

      <TopPlans />

      {/* REBOQUE 100KM , CHAVEIRO ATÉ 120 REAIS, PRONTA RESPOSTA ADICIONAL 10% FIPE RECUPERADO, COLISÃO, PANE MECÂNICA , ELÉTRICA FALTA DE COMBUSTÍVEL , CARGA DE BATERIA! */}
      {/* <MainToppings
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
        secondLine={true}
      /> */}

      <MainToppings2 />

      <InfoSpacing
        src={truck}
        h2='Faça a segurança da sua frota de veículos'
        p1='Temos cotações especiais para empresas que desejam amparar veículos de todos os tipos, garantindo melhor resultado no desempenho do seu negócio.'
        p2='Entre em contato conosco para verificar os melhores planos personalizados da nossa empresa.'
        color='var(--cinza-fundo)'
      />
      <SeeToo />
    </>
  );
}
