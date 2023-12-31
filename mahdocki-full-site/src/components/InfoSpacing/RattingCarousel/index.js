import React, { useState } from "react";
import { TbArrowBigLeftFilled, TbArrowBigRightFilled } from "react-icons/tb";
import styles from "./RattingCarousel.module.css";
import globalStyles from "styles/globalText.module.css";
import "./style.css";
import clientsList from "./clients.json";
import svg from "assets/images/reviewRateImage.svg";

const MAX_VISIBILITY = 3;

export const Card = ({ image, title, rating, review }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={`cardContainer ${hovered ? "" : "hover-out"}`}
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
    >
      <div className='card'>
        <img
          src={image}
          alt={`foto ${title}`}
        ></img>
      </div>
      <div className='card2'>
        <h2>{title}</h2>
        <p>{rating}</p>
        <p>{review}</p>
      </div>
    </div>
  );
};

const data = clientsList;

const RattingCarousel = ({ color }) => {
  const [active, setActive] = useState(0);
  const count = data.length;

  return (
    <section
      className={styles.container}
      style={{ backgroundColor: color }}
    >
      <div className={styles.texts}>
        <h2
          className={globalStyles.globalH3}
          style={{ textAlign: "center" }}
        >
          As opiniões dos nossos clientes deixam bem claro a qualidade do
          serviço que oferecemos!
        </h2>
        <div className={styles.contents}>
          <img
            className={styles.image}
            src={svg}
            alt='none'
          />

          <div className='carousel'>
            {active > 0 && (
              <button
                className={`nav left`}
                onClick={() => setActive((i) => i - 1)}
              >
                <TbArrowBigLeftFilled />
              </button>
            )}
            {clientsList.map((item, i) => (
              <div
                className='card-container'
                key={i}
                style={{
                  "--active": i === active ? 1 : 0,
                  "--offset": (active - i) / 3,
                  "--direction": Math.sign(active - i),
                  "--abs-offset": Math.abs(active - i) / 3,
                  pointerEvents: active === i ? "auto" : "none",
                  opacity: Math.abs(active - i) >= MAX_VISIBILITY ? 0 : 1,
                  display:
                    Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
                }}
              >
                <Card
                  image={item.foto}
                  title={item.nome}
                  rating={item.avaliacao}
                  review={item.opiniao}
                />
              </div>
            ))}
            {active < count - 1 && (
              <button
                className={`nav right`}
                onClick={() => setActive((i) => i + 1)}
              >
                <TbArrowBigRightFilled />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RattingCarousel;
