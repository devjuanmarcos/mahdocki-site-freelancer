import styles from "./MenuInfo.module.css";
import globalStyles from "styles/globalText.module.css";

import React from "react";

export default function index() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <ul className={styles.list}>
          <li>Assistência técnica 24 horas</li>
          <li>Assistência técnica 24 horas</li>
          <li>Assistência técnica 24 horas</li>
          <li>Assistência técnica 24 horas</li>
          <li>Assistência técnica 24 horas</li>
          <li>Assistência técnica 24 horas</li>
        </ul>
      </div>
    </div>
  );
}
