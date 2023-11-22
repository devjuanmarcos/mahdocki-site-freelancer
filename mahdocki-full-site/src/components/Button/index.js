import React from "react";
import styles from "./Button.module.css";

export default function Button({ link, children }) {
  const mensage = `Ola, como vai? Tenho interesse nos serviços que vi no site Mahdocki e gostaria de mais informações.`;

  const codifyMensage = encodeURIComponent(mensage);

  const numberWpp = "+5521970935103";
  const linkWpp = `https://wa.me/${numberWpp}/?text=${codifyMensage}`;
  const myLink = link ? link : linkWpp;
  const handleClick = () => {
    window.location.href = myLink;
  };
  return (
    <button
      className={`${styles["custom-btn"]} ${styles["btn-14"]} }`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
