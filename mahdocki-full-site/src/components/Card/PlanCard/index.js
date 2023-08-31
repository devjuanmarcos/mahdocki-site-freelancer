import React from "react";
import styles from "./PlanCard.module.css";
import image from "assets/images/street paid parking-bro.svg";

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
          <h3 className={styles.titleCard}>{plan.name}</h3>
          <div className='select-all'>
            <input
              type='checkbox'
              checked={isSelected}
              onChange={() => onPlanToggle(plan.id, isSelected)}
            />
            Selecionar todos os serviços
          </div>
          <div className={styles.descriptionActive}>
            <a href='none'>
              ▼<span> Mostrar detalhes dos serviços da cobertura </span>
              <span></span>
            </a>
            {plan.services.map((service) => (
              <div
                key={service.id}
                className='service-item'
              >
                {service.name}
                <h3 className={styles.titleCard}>{service.description}</h3>
                <input
                  type='checkbox'
                  checked={service.selected}
                  onChange={() => onServiceToggle(plan.id, service.id)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <div className='plan-card'>
        <h3>{plan.name}</h3>
        {plan.services.map((service) => (
          <div
            key={service.id}
            className='service-item'
          >
            <input
              type='checkbox'
              checked={service.selected}
              onChange={() => onServiceToggle(plan.id, service.id)}
            />
            {service.name}
          </div>
        ))}
        <div className='select-all'>
          <input
            type='checkbox'
            checked={isSelected}
            onChange={() => onPlanToggle(plan.id, isSelected)}
          />
          Selecionar todos os serviços
        </div>
      </div> */}
    </>
  );
};

export default PlanCard;
