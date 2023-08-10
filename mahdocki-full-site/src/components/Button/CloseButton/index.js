import React from "react";
import styles from "./CloseButton.module.css";
import { AiOutlineClose } from "react-icons/ai";

export default function CloseButton({ onClick }) {
  return (
    <AiOutlineClose
      className={styles.buttonClose}
      onClick={onClick}
    />
  );
}
