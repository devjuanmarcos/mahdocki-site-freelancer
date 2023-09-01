import React, { useState } from "react";
import styles from "./PlanCard.module.css";
import image from "assets/images/street paid parking-bro.svg";
import globalStyles from "styles/globalText.module.css";
import CustomizedSwitches from "components/Icons/CustomizedSwitches";

const PlanCard = ({ plan, onServiceToggle, onPlanToggle }) => {
  const isSelected = plan.services.every((service) => service.selected);
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  return (
    <div style={{ display: "block" }}>
      <div className={styles.planCard}>
        <div className={styles.imageSpace}>
          <img
            src={image}
            alt='none'
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <div
            className={styles.cardModel}
            style={{ cursor: "pointer" }}
            checked={isSelected}
            onClick={() => onPlanToggle(plan.id, isSelected)}
          >
            <h3 className={`${globalStyles.globalH3} ${styles.title}`}>
              {plan.name}
            </h3>
            <div className='select-all'>
              <CustomizedSwitches
                type='checkbox'
                checked={isSelected}
                onChange={() => onPlanToggle(plan.id, isSelected)}
              />
            </div>
          </div>

          <div className={`${styles.card} ${expanded ? styles.expanded : ""}`}>
            <div>
              <span
                onClick={toggleExpand}
                className={expanded ? styles.spanHidden : styles.spanVisible}
              >
                ▼ Mostrar detalhes dos serviços da cobertura
              </span>
              <span
                onClick={toggleExpand}
                className={expanded ? styles.spanVisible : styles.spanHidden}
              >
                ▲ Ocultar detalhes dos serviços da cobertura
              </span>
            </div>
            <ul
              className={`${styles.cardDescription} ${
                expanded ? styles.show : ""
              }`}
              style={{ display: "", margin: "20px 0px" }}
            >
              {plan.services.map((service) => (
                <li
                  key={service.id}
                  className={styles.serviceItem}
                >
                  <label htmlFor={`service-${service.id}`}>
                    <div className={styles.cardModel}>
                      <h3 className={globalStyles.globalH4}>{service.name}</h3>
                      <CustomizedSwitches
                        id={`service-${service.id}`}
                        checked={service.selected}
                        onChange={() => onServiceToggle(plan.id, service.id)}
                      />
                    </div>
                    <h3 className={`${globalStyles.globalP} ${styles.title}`}>
                      {service.description}
                    </h3>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
