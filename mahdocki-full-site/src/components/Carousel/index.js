import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // Importe os estilos do carrossel
import "slick-carousel/slick/slick-theme.css"; // Importe o tema do carrossel (opcional)
import styles from "./Carousel.module.css"; // Importe seus estilos
import MiniCard from "components/Card/MiniCard";
import cards from "assets/Json/geral.json";

const Carrossel = () => {
  const settings = {
    infinite: true, // Loop infinito
    autoplay: true, // Reprodução automática
    autoplaySpeed: 0, // Intervalo de troca em milissegundos
    speed: 20000, // Velocidade da transição
    slidesToShow: 4, // Quantidade de slides exibidos por vez
    slidesToScroll: 1, // Quantidade de slides para rolar
    cssEase: "linear", // Efeito de transição linear
    className: styles.carousel, // Use sua classe de estilo do carrossel
    adaptiveHeight: true,
  };
  const settings2 = {
    infinite: true, // Loop infinito
    autoplay: true, // Reprodução automática
    autoplaySpeed: 0, // Intervalo de troca em milissegundos
    speed: 8000, // Velocidade da transição
    slidesToShow: 4, // Quantidade de slides exibidos por vez
    slidesToScroll: 1, // Quantidade de slides para rolar
    cssEase: "linear", // Efeito de transição linear
    className: styles.carousel, // Use sua classe de estilo do carrossel
    rtl: true,
  };

  return (
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
    </div>
  );
};

export default Carrossel;
