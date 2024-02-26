import Card from "components/Card/Card";
import styles from "./PresentationCard.module.css";
import globalStyles from "styles/globalText.module.css";
import React from "react";

export const CardModelList = ({
  image,
  name,
  desc,
  flexDirection,
  paragraph,
}) => {
  return (
    <div className={styles.container}>
      {/* <div className={styles.container}>
        <h1 className={globalStyles.globalH5}>{name}</h1>
        <p className={globalStyles.globalP3}>{paragraph}</p>
      </div> */}
      <div
        className={styles.content}
        style={{ flexDirection: flexDirection }}
      >
        <div className={styles.images}>
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

export default function PresentationCard({ databaseInfo, title }) {
  return (
    <>
      <div className={styles.cardBase}>
        <h1
          className={globalStyles.globalH1}
          style={{ color: "var(--roxo-escuro)", maxWidth: "800px" }}
        >
          {title}
        </h1>
      </div>
      <div className={styles.main}>
        {databaseInfo.map((item, id) => (
          <CardModelList
            key={id}
            image={item.imagem}
            name={item.nome}
            desc={item.descricaoBanner}
            flexDirection={item.id % 2 === 1 ? "row" : "row-reverse"}
            paragraph={item.textoResolucao}
          />
        ))}
      </div>
      <div style={{ marginBottom: "50px", width: "100%" }}>
        <Card children='Faça sua cotação e selecione o plano que melhor lhe atender.' />
      </div>
    </>
  );
}
