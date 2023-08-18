import styles from "./ListModule.module.css";
import React from "react";

export default function ListModule({ titleItem, description }) {
  return (
    <div className={styles.container}>
      <ul className={styles.ulItem}>
        {titleItem}
        <li className={styles.liItem}> {description} </li>
      </ul>
    </div>
  );
}
