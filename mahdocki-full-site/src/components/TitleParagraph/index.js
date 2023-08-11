import styles from "./TitleParagraph.module.css";
import React from "react";

export default function TitleParagraph() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>
        Tenha o seu Seguro Auto online na palma da mão
      </h1>
      <p className={styles.paragraph}>
        Aqui, dá pra fazer tudo 100% online sempre que precisar. Você
        personaliza, contrata e aciona o seu seguro de carro direto pelo
        aplicativo. É rápido e fácil.
      </p>
    </section>
  );
}
