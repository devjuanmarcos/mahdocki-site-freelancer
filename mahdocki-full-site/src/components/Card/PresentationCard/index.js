import styles from "./PresentationCard.module.css";
import React from "react";
// import reboqueImage from "assets/images/reboqueImage.svg";

export const CardModelList = ({
  image,
  name,
  desc,
  flexDirection,
  paragraph,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.container}>
        <div className={styles.info}>
          <h1 className={styles.titleP}>{name}</h1>
        </div>
        <div className={styles.list}>
          <p className={styles.paragraphP}>{paragraph}</p>
        </div>
      </div>
      <div
        className={styles.content}
        style={{ flexDirection: flexDirection }}
      >
        <div className={styles.image}>
          <img
            src={image}
            alt={image}
          />
        </div>
        <div className={styles.texts}>
          <h1 className={styles.title}>{name}</h1>
          <div className={styles.card}>
            <p className={styles.paragraph}>{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function PresentationCard({ databaseInfo }) {
  return (
    <div>
      <div className={styles.cardBase}>
        <h1 className={styles.title}>
          Projetado diversos serviços para oferecer suporte em várias situações
          de emergência:
        </h1>
      </div>
      {databaseInfo.map((item, id) => (
        <div>
          <CardModelList
            key={id}
            image={item.imagem}
            name={item.nome}
            desc={item.descricaoBanner}
            flexDirection={item.id % 2 === 1 ? "row" : "row-reverse"}
            paragraph={item.textoResolucao}
          />
        </div>
      ))}
    </div>
  );
}
