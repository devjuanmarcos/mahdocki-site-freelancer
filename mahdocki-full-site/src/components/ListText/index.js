import ListModule from "./ListModule";
import styles from "./ListText.module.css";
import React from "react";

export default function ListText({ itens, title }) {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h1 className={styles.title}>{title}</h1>
      </div>
      <div className={styles.list}>
        <ul className={styles.listItens}>
          {itens.map((item, id) => (
            <ListModule
              key={id}
              titleItem={item.title}
              description={item.description}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
