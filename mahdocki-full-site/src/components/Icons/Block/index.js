import styles from "./Block.module.css";
import React from "react";
import { BiBlock } from "react-icons/bi";
export default function BlockIcon() {
  return (
    <div className={styles.color}>
      <BiBlock className={styles.biBlock} />
    </div>
  );
}
