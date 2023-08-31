import React from "react";
import styles from "./PlanCard.module.css";
import image from "assets/images/street paid parking-bro.svg";
import globalStyles from "styles/globalText.module.css";

const PlanCard = ({ plan, onServiceToggle, onPlanToggle }) => {
  const isSelected = plan.services.every((service) => service.selected);

  return (
    <>
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
            checked={isSelected}
            onClick={() => onPlanToggle(plan.id, isSelected)}
          >
            <h3 className={`${globalStyles.globalH3} ${styles.title}`}>
              {plan.name}
            </h3>
            <div className='select-all'>
              <input
                type='checkbox'
                checked={isSelected}
                onChange={() => onPlanToggle(plan.id, isSelected)}
              />
            </div>
          </div>

          <div className={styles.descriptionActive}>
            <a href='none'>
              ▼
              <span style={{ display: "none" }}>
                {" "}
                Mostrar detalhes dos serviços da cobertura{" "}
              </span>
              <span> Ocultar detalhes dos serviços da cobertura </span>
            </a>

            <ul style={{ display: "", margin: "20px 0px" }}>
              {plan.services.map((service) => (
                <li
                  key={service.id}
                  className={styles.serviceItem}
                >
                  <label htmlFor={`service-${service.id}`}>
                    <div className={styles.cardModel}>
                      <h3 className={globalStyles.globalH4}>{service.name}</h3>
                      <input
                        type='checkbox'
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
    </>
  );
};

export default PlanCard;
