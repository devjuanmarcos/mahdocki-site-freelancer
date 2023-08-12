import React from "react";
import styles from "./RattingCarousel.module.css";

const RattingCarousel = ({ clientes }) => {
  return (
    <div className={styles.body}>
      <div className={styles.carousel}>
        {clientes.map((cliente, index) => (
          <div
            className={styles.card}
            key={index}
          >
            {/* <img
            src={cliente.foto}
            alt={`Foto de ${cliente.nome}`}
          /> */}
            <h2>{cliente.nome}</h2>
            <p className={styles.rating}>{cliente.avaliacao}</p>
            <p className={styles.review}>{cliente.opiniao}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RattingCarousel;
