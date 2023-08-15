import styles from "./BannerNoCover.module.css";
import React, { useState } from "react";
import { BiBlock } from "react-icons/bi";
import { HiOutlineArrowCircleDown } from "react-icons/hi";

const BannerNoCover = ({ title, description }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`${styles.container} ${expanded ? styles.expanded : ""} `}>
      <div className={styles.cardHeader}>
        <div className={styles.iconCenter}>
          <BiBlock className={styles.icon}></BiBlock>
        </div>
        <div className={styles.text}>
          <h2 className={styles.h2}>{title}</h2>
        </div>
        <HiOutlineArrowCircleDown
          className={`${styles.expandedButton} ${
            expanded ? styles.expandedIcon : ""
          } `}
          onClick={toggleExpand}
        >
          ▲
        </HiOutlineArrowCircleDown>
      </div>
      {expanded && <p className={styles.cardDescription}> {description} </p>}
    </div>
  );
};
export default BannerNoCover;
