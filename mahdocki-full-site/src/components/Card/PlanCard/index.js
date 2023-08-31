import React from "react";
import styles from "./PlanCard.module.css";

const PlanCard = ({ plan, onServiceToggle, onPlanToggle }) => {
  const isSelected = plan.services.every((service) => service.selected);

  return (
    <>
      <div className={styles.planCard}>
        <h1>oi</h1>
      </div>
      <div className='plan-card'>
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
      </div>
    </>
  );
};

export default PlanCard;
