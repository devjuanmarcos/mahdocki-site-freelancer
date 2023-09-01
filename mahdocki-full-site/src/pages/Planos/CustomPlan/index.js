// App.js
import React, { useState } from "react";
import PlanCard from "components/Card/PlanCard";
import plansData from "./data";
import styles from "./CustomPlan.module.css";

function CustomPlan() {
  const [plans, setPlans] = useState(plansData);

  const toggleService = (planId, serviceId) => {
    setPlans((prevPlans) =>
      prevPlans.map((plan) =>
        plan.id === planId
          ? {
              ...plan,
              services: plan.services.map((service) =>
                service.id === serviceId
                  ? { ...service, selected: !service.selected }
                  : service
              ),
            }
          : plan
      )
    );
  };

  const togglePlan = (planId, isSelected) => {
    setPlans((prevPlans) =>
      prevPlans.map((plan) =>
        plan.id === planId
          ? {
              ...plan,
              services: plan.services.map((service) => ({
                ...service,
                selected: !isSelected,
              })),
            }
          : plan
      )
    );
  };

  return (
    <>
      <section className={styles.cardCustomPlan}>
        <div className={styles.cardSelect}>
          {plans.map((plan) => (
            <PlanCard
              key={plan.id}
              plan={plan}
              onServiceToggle={toggleService}
              onPlanToggle={togglePlan}
            />
          ))}
        </div>
      </section>
      <section className={styles.cardValue}>
        <div className={styles.cVContent}>
          <div className={styles.apagarDepois}></div>
        </div>
      </section>
    </>
  );
}

export default CustomPlan;
