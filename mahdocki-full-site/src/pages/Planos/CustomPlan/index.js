// App.js
import React, { useState } from "react";
import PlanCard from "components/Card/PlanCard";
import plansData from "./data";
import styles from "./CustomPlan.module.css";
import BannerModel from "components/Banner/BannerModel";

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
    <div className={styles.container}>
      <div style={{ marginBottom: "140px", width: "100%" }}>
        <BannerModel />
      </div>
      <div className='App'>
        {plans.map((plan) => (
          <PlanCard
            key={plan.id}
            plan={plan}
            onServiceToggle={toggleService}
            onPlanToggle={togglePlan}
          />
        ))}
      </div>
    </div>
  );
}

export default CustomPlan;
