import React from "react";
import Banner from "components/Banner/Main";
import TitleParagraph from "components/InfoSpacing/TitleParagraph";
import styles from "./Home.module.css";
import Carrossel from "components/Carousel";
import InfoSpacing from "components/InfoSpacing/InfoSpacing";
import WeCover from "components/InfoSpacing/WeCover";
import MainToppings from "components/InfoSpacing/MainToppings";
import RattingCarousel from "components/InfoSpacing/RattingCarousel";
import NotCover from "components/InfoSpacing/NotCover";
import CardData from "../../components/InfoSpacing/NotCover/cardsData.json";
import TrackerPage from "components/InfoSpacing/TrackerPage";
import Transparency from "components/InfoSpacing/Transparency";
import moto from "assets/images/motoImage.svg";

export default function Home() {
  return (
    <>
      <div>
        <Banner
          title={"Assistência 24 horas!"}
          paragraph={
            "Tenha seu carro protegido com a Mahdocki e desfrute da vida sem preocupações. Personalize as coberturas e assistências do seu plano e pague somente pelo que selecionar."
          }
        />

        <TitleParagraph
          title='Tenha o seu Serviço Auto online na palma da mão'
          paragraph='Aqui, dá pra fazer tudo 100% online sempre que precisar. Você
          personaliza, contrata e aciona o seu plano direto pelo telefone. É
          rápido e fácil.'
        />
        <Carrossel
          title='Coberturas da Mahdocki'
          paragraph='Olha só os serviços disponíveis pra você escolher:'
          color='var(--branco-medio)'
        />
        <InfoSpacing
          direction='row-reverse'
          src={moto}
          h2='Contrate nossos serviços para a sua moto!'
          p1='Oferecemos nossos planos para todos os tipos de motocicletas, perfeito para quem trabalha com moto todos os dias ou para quem usa apenas para viajar.'
          p2='Para verificar todas as funcionalidades do serviço basta preencher o formulário e aguardar a avaliação da proposta.'
          color='var(--cinza-fundo)'
        />

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
          color='var(--cor-principal)'
          textColor='var(--branco)'
        />
        <RattingCarousel color='var(--branco-medio)' />
        <MainToppings
          h2='Rastreie sua frota de veículos'
          p='Nossos serviços são essênciais para garantir a segurança dos seus veículos empresariais e comerciais.'
          img1='https://www.datocms-assets.com/16903/1577197391-coveragesteal-thefthd4x3light-2x.png?auto=compress&dpr=1&fm=webp&w=186'
          imgt1='rotas em tempo real'
          imgp1='Saiba onde e por onde seus veículos passaram direto pelo seu celular.'
          img2='https://www.datocms-assets.com/16903/1577197391-coveragesteal-thefthd4x3light-2x.png?auto=compress&dpr=1&fm=webp&w=186'
          imgt2='Status de todos os veículos'
          imgp2='Verifique quando quiser todos os status mecânicos e elétricos dos seus veículos.'
          img3='https://www.datocms-assets.com/16903/1577197391-coveragesteal-thefthd4x3light-2x.png?auto=compress&dpr=1&fm=webp&w=186'
          imgt3='Bloqueio instantâneo'
          imgp3='Em casos de emergência você pode bloquear a inguinição do veículo para ele não sair do local atual.'
          color='var(--cinza-fundo)'
        />
        <div
          id='cover'
          className={styles.anchorOffset}
        />
        {/* <WeCover
          cover='#652f9e'
          title='white'
        /> */}
        <TrackerPage />
        <MainToppings
          h2='Por que contratar nossos serviços Mahdocki?'
          p='Aqui trabalhamos de forma direta!'
          img1='https://www.datocms-assets.com/16903/1614276874-illus-characters-youser-choose-1-4x3-light.png'
          imgt1='Melhores preços!'
          imgp1='Menos de uma pizza por mês pra você ter segurança e amparo com o seu veículo.'
          img2='https://www.datocms-assets.com/16903/1614276874-illus-characters-youser-choose-1-4x3-light.png'
          imgt2='Altere quando quiser'
          imgp2='Vc pode mudar as coberturas e assistências entrando em contato com a nossa equipe.'
          img3='https://www.datocms-assets.com/16903/1614276874-illus-characters-youser-choose-1-4x3-light.png'
          imgt3='Atendimento pessoal'
          imgp3='Vamos entrar em contato para negociar todo o processo.'
          color='var(--cinza-fundo)'
        />
        <NotCover cards={CardData} />
        <InfoSpacing
          src='https://www.datocms-assets.com/16903/1594322322-car-gol-front-01-4x3-light.png'
          h2='Indique um amigo e ganhe prêmios!'
          p1='Promoção Comunidade Segura: Na compra de dois planos a próxima mensalidade sai com 40% de desconto.'
          p2='Ah, e sem contar que você e seu amigo ainda participam do nosso sorteio de fim de ano!'
          color='var(--cinza-fundo)'
        />
        <Transparency color='var(--cor-card)' />
      </div>
    </>
  );
}
