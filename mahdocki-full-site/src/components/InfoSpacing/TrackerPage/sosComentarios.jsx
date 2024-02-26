import styles from "./TrackerPage.module.css";
import globalStyles from "styles/globalText.module.css";
import React from "react";
import cell from "assets/images/comentarios.jpeg";

export default function SosComentarios() {
  return (
    <div
      className={styles.main}
      style={{ gap: "20px" }}
    >
      <div className={styles.info}>
        <h1 className={globalStyles.globalH3}>
          O comentário dos nossos clientes deixa claro a qualidade do serviço
          que prestamos
        </h1>

        <p className={globalStyles.globalPBig}>
          Os nossos clientes estão incrivelmente satisfeitos com os serviços
          oferecidos pela SOS mahdock! Recebemos uma avalanche de opiniões
          positivas e comentários elogiosos sobre a qualidade dos serviços
          prestados. Muitos expressaram sua gratidão pela atenção aos detalhes,
          profissionalismo e eficiência demonstrados em cada interação. Além
          disso, vários clientes destacaram a dedicação da equipe em superar
          suas expectativas, proporcionando uma experiência excepcional em cada
          transação. Esses feedbacks são uma prova clara do compromisso da SOS
          mahdock em fornecer o melhor atendimento possível e garantir a
          satisfação total dos nossos clientes.
        </p>

        <a
          style={{ marginTop: "20px" }}
          href='https://www.google.com/search?client=opera&q=oficina+mahdocki&sourceid=opera&ie=UTF-8&oe=UTF-8#lrd=0x997fa05dcdce3f:0x4281e92203db5f99,1,,,,'
        >
          Clique aqui para ver mais opiniões reais dos nossos clientes
        </a>
      </div>
      <div className={styles.images}>
        <img
          style={{ borderRadius: "20px" }}
          className={styles.image}
          src={cell}
          alt='CellPhone '
        />
      </div>
    </div>
  );
}
