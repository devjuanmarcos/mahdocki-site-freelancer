import styles from "./TitleParagraph.module.css";
import React from "react";

export default function TitleParagraph() {
  return (
    <section className={styles.container}>
      <div>
        <h1 className={styles.title}>
          Tenha o seu Serviço Auto online na palma da mão
        </h1>
        <p className={styles.paragraph}>
          Aqui, dá pra fazer tudo 100% online sempre que precisar. Você
          personaliza, contrata e aciona o seu plano direto pelo telefone. É
          rápido e fácil.
        </p>
      </div>
      <div className={styles.container2}>
        <h2 className={styles.subtitle}> Coberturas da Mahdocki </h2>
        <p className={styles.paragraph}>
          {" "}
          Olha só os serviços disponíveis pra você escolher:{" "}
        </p>
      </div>
    </section>
  );
}
