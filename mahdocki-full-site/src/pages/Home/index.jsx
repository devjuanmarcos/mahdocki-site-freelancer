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
import server from "assets/images/server.svg";
import reboque from "assets/images/reboqueImage.svg";
import prontaResposta from "assets/images/prontaResposta.svg";
import rastreio from "assets/images/RastreieDiaTodoImage.svg";
import rota from "assets/images/rota.svg";
import status from "assets/images/status.svg";
import block from "assets/images/block.svg";

export default function Home() {
  return (
    <>
      <div>
        <Banner
          title={"Assistência 24 horas!"}
          paragraph={
            "Tenha a tranquilidade de contar com a S.O.S Mahdocki Assistência 24 horas para o seu veículo, seja ele um carro ou uma moto. Porque imprevistos acontecem quando menos esperamos; seja uma pane mecânica ou elétrica, um acidente, perda de chaves ou falta de combustível. Basta nos chamar, e o nosso serviço de reboque S.O.S Mahdocki estará a caminho para te ajudar."
          }
        />

        {/* Ok */}
        <TitleParagraph
          title='Contrate agora o plano que melhor atende às suas necessidades. '
          paragraph='É rápido e 100% online, ou se preferir, basta clicar no WhatsApp, e nossa equipe terá o prazer de atendê-lo.'
        />

        {/* Ok */}
        <Carrossel
          title='Coberturas da Mahdocki'
          paragraph='Confira os serviços disponíveis pra você:'
          color='var(--branco-medio)'
        />

        {/* OK */}
        <InfoSpacing
          direction='row-reverse'
          src={moto}
          h2='Contrate nossos serviços para a sua moto!'
          p1='Oferecemos nossos planos para todos os tipos de motocicletas, perfeito para quem trabalha com moto todos os dias ou para quem usa apenas para viajar.'
          p2='Para verificar todas as funcionalidades do serviço basta preencher o formulário e aguardar a avaliação da proposta.'
          color='var(--cinza-fundo)'
        />

        {/* Mudar dps */}
        <MainToppings
          h2='Principais coberturas da Mahdocki'
          p='Os serviços mais procurados pelos nossos clientes nos últimos meses'
          img1={reboque}
          imgt1='Reboque 24 horas'
          imgp1='Quando seu veículo está com problemas, nosso reboque está pronto para te ajudar. Conte conosco para levá-lo ao local desejado, garantindo sua tranquilidade.'
          img2={prontaResposta}
          imgt2='Equipe pronta resposta em caso de roubo'
          imgp2='Com protocolos de ação bem definidos, aumentamos suas chances de recuperar seu veículo roubado.'
          img3={rastreio}
          imgt3='Rastreamento em tempo real e bloqueio instantâneo do veículo'
          imgp3='Tenha acesso a recursos avançados de rastreamento, incluindo informações detalhadas do veículo, histórico de percursos e bloqueio imediato.'
          color='var(--cor-principal)'
          textColor='var(--branco)'
        />

        {/* Pegar as opiniões depois */}
        {/* <RattingCarousel color='var(--branco-medio)' /> */}

        {/* Mudar apenas as imagens */}
        <MainToppings
          h2='Rastreie sua frota de veículos'
          p='Nossos serviços são essênciais para garantir a segurança dos seus veículos empresariais e comerciais.'
          img1={rota}
          imgt1='rotas em tempo real'
          imgp1='Saiba onde e por onde seus veículos passaram direto pelo seu celular.'
          img2={status}
          imgt2='Status de todos os veículos'
          imgp2='Verifique quando quiser todos os status dos seus veículos.'
          img3={block}
          imgt3='Bloqueio instantâneo'
          imgp3='Em casos de emergência você pode bloquear a ignição do veículo para ele não sair do local atual.'
          color='var(--cinza-fundo)'
        />

        <div
          id='cover'
          className={styles.anchorOffset}
        />

        {/* Excluir ampla gama de serviços */}
        <WeCover
          cover='#652f9e'
          title='white'
        />

        <TrackerPage />

        {/* Ok */}
        <MainToppings
          h2='Por que contratar nossos serviços Mahdocki?'
          p='Com mais de 20 anos de experiência no setor automotivo, nossa equipe é composta por profissionais altamente treinados e qualificados. Prestamos assistência 24 horas para diversas seguradoras e associações veiculares, e nossa reputação é respaldada pela melhor avaliação no Google, Web Prestador e na Rota das Oficinas, com classificação 5 estrelas. Movidos pela vasta experiência acumulada ao longo desses anos, decidimos expandir nossa assistência 24 horas S.O.S Mahdocki para você, mantendo o mesmo padrão de qualidade e segurança que oferecemos aos nossos parceiros. A grande vantagem é que você tem acesso a todos os serviços que uma seguradora oferece em sua assistência, a um valor justo, sem restrições de perfil de idade, motorista, CEP ou ano do veículo. Escolha a excelência em assistência automotiva, escolha S.O.S Mahdocki.'
          color='var(--cinza-fundo)'
        />

        {/* Elaborar textos */}
        <NotCover cards={CardData} />
      </div>
    </>
  );
}
