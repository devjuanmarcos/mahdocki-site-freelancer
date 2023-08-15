import BannerNoCover from "components/Banner/BannerNoCover";
import styles from "./NotCover.module.css";
import React from "react";

const NotCover = ({ cards }) => {
  return (
    <div className={styles.cardList}>
      {cards.map((card, index) => (
        <BannerNoCover
          key={index}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
};
export default NotCover;
