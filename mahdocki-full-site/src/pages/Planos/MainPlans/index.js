import styles from "./MainPlans.module.css";
import React from "react";
import BannerModel from "components/Banner/BannerModel";
import bannerImage from "assets/images/mulhernotelefone.jpeg";
import TopPlans from "components/InfoSpacing/TopPlans";
import SeeToo from "components/InfoSpacing/Promo";
import MainToppings from "components/InfoSpacing/MainToppings";
import InfoSpacing from "components/InfoSpacing/InfoSpacing";
import rent from "assets/images/Apartment rent-amico.svg";
import truck from "assets/images/pngegg (1).png";
import MainToppings2 from "components/InfoSpacing/MainToppings2";
import TopPlans2 from "components/InfoSpacing/TopPlans/toplans2";

export default function MainPlans() {
  return (
    <>
      <div className={styles.banner}>
        <BannerModel
          image={bannerImage}
          title={
            "Os melhores planos para seu veículo, seja ele carro, moto, jet sky ou scooter elétrica"
          }
          paragraph={
            "Fique totalmente respaldado em todos os tipos de ocasiões. Oferecemos uma vasta gama de vantagens para você e sua família. Confira abaixo!"
          }
        />
      </div>
      <InfoSpacing
        direction='row-reverse'
        src={rent}
        h2='Menos de R$ 5,70 para ter sua assistência 24 hrs e seguro roubo e furto'
        p1='Ajudando você em qualquer tipo de situação nas estradas e rodovias.'
        p2='Para verificar todas as funcionalidades do serviço basta preencher o formulário e aguardar a avaliação da proposta.'
        color='var(--cinza-fundo)'
      />

      <TopPlans2 />
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
        buttonText={"FALE COM UM DE NOSSOS ATENDENTES"}
      />
      <SeeToo />
    </>
  );
}
