import styles from "./WeCover.module.css";
import globalStyles from "styles/globalText.module.css";
import React from "react";
import Button from "components/Button";
import cards from "assets/Json/geral.json";
import MiniCard from "components/Card/MiniCard";

export default function WeCover({ cover, title }) {
  return (
    <div style={{ backgroundColor: cover }}>
      <div className={styles.container}>
        <h1
          className={globalStyles.globalH3}
          style={{ color: title }}
        >
          Serviços que oferecemos
        </h1>
        <p
          className={globalStyles.globalP}
          style={{ color: "#fff", paddingBottom: "12px" }}
        >
          Todos os nossos serviços de assistência 24h, pronta resposta e
          rastreamento de veículos
        </p>
        <div className={styles.containerCards}>
          {cards.map((card, id) => (
            <MiniCard
              key={id}
              children={card.nome}
              image={card.imagem}
              alt={card.nome}
            />
          ))}
        </div>
        <Button children='COTAR AGORA' />
      </div>
    </div>
  );
}
