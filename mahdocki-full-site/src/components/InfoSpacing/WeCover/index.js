import styles from "./WeCover.module.css";
import React from "react";
import MiniCardCover from "components/Card/MiniCardCover";
import Button from "components/Button";

export default function WeCover({ cover, title, paragraph }) {
  return (
    <div style={{ backgroundColor: cover }}>
      <div className={styles.container}>
        <h1
          className={styles.title}
          style={{ color: title }}
        >
          {" "}
          O que cobrimos?{" "}
        </h1>
        <p
          className={styles.paragraph}
          style={{ color: paragraph }}
        >
          Todos os nossos serviços de assistência 24h, pronta resposta e
          rastreamento de veículos
        </p>
        <div className={styles.containerCards}>
          <MiniCardCover
            children='Pane seca'
            image='https://www.datocms-assets.com/16903/1587741223-illus-assistances-auto-towage-1x1-light-2x.png?auto=compress&dpr=1.5&fm=webp&w=44'
            alt='pane seca foto'
          />
          <MiniCardCover
            children='Pane seca'
            image='https://www.datocms-assets.com/16903/1587741223-illus-assistances-auto-towage-1x1-light-2x.png?auto=compress&dpr=1.5&fm=webp&w=44'
            alt='pane seca foto'
          />
          <MiniCardCover
            children='Pane seca'
            image='https://www.datocms-assets.com/16903/1587741223-illus-assistances-auto-towage-1x1-light-2x.png?auto=compress&dpr=1.5&fm=webp&w=44'
            alt='pane seca foto'
          />
          <MiniCardCover
            children='Pane seca'
            image='https://www.datocms-assets.com/16903/1587741223-illus-assistances-auto-towage-1x1-light-2x.png?auto=compress&dpr=1.5&fm=webp&w=44'
            alt='pane seca foto'
          />
          <MiniCardCover
            children='Pane seca'
            image='https://www.datocms-assets.com/16903/1587741223-illus-assistances-auto-towage-1x1-light-2x.png?auto=compress&dpr=1.5&fm=webp&w=44'
            alt='pane seca foto'
          />
          <MiniCardCover
            children='Pane seca'
            image='https://www.datocms-assets.com/16903/1587741223-illus-assistances-auto-towage-1x1-light-2x.png?auto=compress&dpr=1.5&fm=webp&w=44'
            alt='pane seca foto'
          />
          <MiniCardCover
            children='Pane seca'
            image='https://www.datocms-assets.com/16903/1587741223-illus-assistances-auto-towage-1x1-light-2x.png?auto=compress&dpr=1.5&fm=webp&w=44'
            alt='pane seca foto'
          />
          <MiniCardCover
            children='Pane seca'
            image='https://www.datocms-assets.com/16903/1587741223-illus-assistances-auto-towage-1x1-light-2x.png?auto=compress&dpr=1.5&fm=webp&w=44'
            alt='pane seca foto'
          />
          <MiniCardCover
            children='Pane seca'
            image='https://www.datocms-assets.com/16903/1587741223-illus-assistances-auto-towage-1x1-light-2x.png?auto=compress&dpr=1.5&fm=webp&w=44'
            alt='pane seca foto'
          />
        </div>
      </div>
      <div className={styles.btn}>
        <Button children='COTAR AGORA' />
      </div>
    </div>
  );
}
