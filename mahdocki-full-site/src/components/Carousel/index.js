import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import globalStyles from "styles/globalText.module.css";
import "../Carousel/slick.css"; // Importe os estilos do carrossel
// import "slick-carousel/slick/slick-theme.css"; // Importe o tema do carrossel (opcional)
import styles from "./Carousel.module.css"; // Importe seus estilos
import MiniCard from "components/Card/MiniCard";
import cards from "assets/Json/geral.json";

const Carrossel = ({ title, paragraph, color }) => {
  const [slidesToShow, setSlidesToShow] = useState(5); // Valor padrão para slidesToShow
  const larguraDoSlideDesejada = 303; // Largura do slide desejada em pixels

  useEffect(() => {
    // Função para calcular slidesToShow com base na largura da janela
    const calcularSlidesToShow = () => {
      const windowWidth = window.innerWidth;
      const newSlidesToShow = Math.floor(windowWidth / larguraDoSlideDesejada);
      setSlidesToShow(newSlidesToShow);
    };

    // Calcula slidesToShow inicialmente e adiciona um ouvinte de redimensionamento
    calcularSlidesToShow();
    window.addEventListener("resize", calcularSlidesToShow);

    // Remove o ouvinte de redimensionamento quando o componente é desmontado
    return () => {
      window.removeEventListener("resize", calcularSlidesToShow);
    };
  }, []); // O segundo argumento vazio garante que o efeito só seja executado uma vez no montante

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 8000, // Velocidade da transição
    maxSpeed: 8000,
    slidesToShow: slidesToShow, // Usando o valor calculado aqui
    slidesToScroll: 1,
    cssEase: "linear",
    className: styles.carousel, // Substitua por sua classe CSS
    draggable: false, // Desativa a interação do mouse (ou seja, não pode arrastar com o mouse)
  };
  const settings2 = {
    infinite: true, // Loop infinito
    autoplay: true, // Reprodução automática
    autoplaySpeed: 0, // Intervalo de troca em milissegundos
    speed: 8000, // Velocidade da transição
    slidesToShow: slidesToShow, // Usando o valor calculado aqui
    slidesToScroll: 1, // Quantidade de slides para rolar
    cssEase: "linear", // Efeito de transição linear
    className: styles.carousel, // Use sua classe de estilo do carrossel
    draggable: false, // Desativa a interação do mouse (ou seja, não pode arrastar com o mouse)
    rtl: true,
  };

  return (
    <section
      className={styles.container}
      style={{ backgroundColor: color }}
    >
      <h2 className={globalStyles.globalH3}>{title}</h2>
      <p
        className={`${styles.textBox} ${globalStyles.globalP}`}
        style={{ marginBottom: "72px" }}
      >
        {paragraph}
      </p>

      <div className={styles.carouselWrapper}>
        <Slider {...settings}>
          {cards.map((card, id) => (
            <MiniCard
              key={id}
              children={card.nome}
              image={card.imagem}
              alt={card.nome}
            />
          ))}
        </Slider>
        <Slider {...settings2}>
          {cards.map((card, id) => (
            <MiniCard
              key={id}
              children={card.nome}
              image={card.imagem}
              alt={card.nome}
            />
          ))}
        </Slider>
        <div className={styles.linkCarousel}>
          <a
            className={styles.link}
            href='#cover'
          >
            Saiba mais sobre as coberturas
          </a>
        </div>
      </div>
    </section>
  );
};

export default Carrossel;
