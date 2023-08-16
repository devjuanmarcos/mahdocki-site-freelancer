import BlockIcon from "components/Icons/Block";
import React, { useState } from "react";
import styles from "./BannerNoCover.module.css";
import { HiOutlineArrowCircleDown } from "react-icons/hi";

const BannerNoCover = ({ title, description }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className={`${styles.card} ${expanded ? styles.expanded : ""}`}
      onClick={toggleExpand}
    >
      <div className={styles.cardHeader}>
        <div className={styles.iconCenter}>
          <BlockIcon />
        </div>
        <h3 className={styles.cardTitle}>{title}</h3>
        <button
          className={`${styles.expandButton} ${
            expanded ? styles.expandedIcon : ""
          }`}
        >
          <HiOutlineArrowCircleDown className={styles.iconCenter} />
        </button>
      </div>
      <p className={`${styles.cardDescription} ${expanded ? styles.show : ""}`}>
        {description}
      </p>
    </div>
  );
};

export default BannerNoCover;
