import React, { useState } from "react";
import PlanCard from "components/Card/PlanCard";
import plansData from "./data";
import styles from "./CustomPlan.module.css";
import globalStyles from "styles/globalText.module.css";
// eslint-disable-next-line
import imageTitle from "assets/images/Free shipping-amico.svg";

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

  const getSelectedServices = () => {
    const selectedServices = [];

    plans.forEach((plan) => {
      plan.services.forEach((service) => {
        if (service.selected) {
          selectedServices.push(service);
        }
      });
    });

    return selectedServices;
  };

  const selectedServices = getSelectedServices();
  const selectedServicesWpp = getSelectedServices(); // Obtenha os serviços selecionados
  const serviceNames = selectedServicesWpp.map((service) => service.name); // Obtenha os nomes dos serviços
  const servicesString = serviceNames.join(", "); // Una os nomes dos serviços em uma string
  const numberOfSelectedServices = selectedServices.length;
  const totalValueOfSelectedServices = selectedServices.reduce(
    // Calcular a soma dos valores dos serviços selecionados
    (total, service) => total + service.value,
    0
  );
  const oldValueOfSelectedServices = totalValueOfSelectedServices * 1.2;

  // Construção de mensagem por link para whatsapp

  const mensage = `Ola, como vai? Fiz uma cotação personalizada no site Mahdocki e gostaria de mais informações. 
  Segue abaixo os serviços que selecionei: 
  ${servicesString}
  `;

  const codifyMensage = encodeURIComponent(mensage);

  const numberWpp = "5524981319462";
  const linkWpp = `https://wa.me/${numberWpp}/?text=${codifyMensage}`;
  console.log(linkWpp);

  return (
    <>
      <section className={styles.cardCustomPlan}>
        <div className={styles.apresentation}>
          <h1
            className={globalStyles.globalH1}
            style={{ color: "var(--preto)", marginBottom: "8px" }}
          >
            Monte seu plano do seu jeito!
          </h1>
          <h3
            className={globalStyles.globalH3}
            style={{ textAlign: "center", marginBottom: "0px" }}
          >
            Escolha os serviços que mais lhe agradam para montar um pacote
            personalizado, podendo ser alterado a qualquer momento.
          </h3>
        </div>
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
        <div className={styles.contentBase}>
          <div className={styles.valueCard}>
            <div className={styles.valueCardContent}>
              <div className={styles.imageTitle}>
                <img
                  className={styles.image}
                  src={imageTitle}
                  alt='none'
                />
                <h3
                  className={globalStyles.globalH3}
                  style={{ color: "var(--branco) ", fontSize: "24px" }}
                >
                  Plano personalizado
                </h3>
                <a
                  href={linkWpp}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Clique aqui para abrir no WhatsApp
                </a>
              </div>
              <div className={styles.quantInfo}>
                <div className={styles.quant}>
                  <div className={styles.quantJust}>
                    <h3>{numberOfSelectedServices}</h3>
                    <h3 style={{ marginLeft: "4px" }}>Coberturas</h3>
                  </div>
                  <div className={styles.quantJust}>
                    <h3>{"R$"}</h3>
                    <h3> {totalValueOfSelectedServices.toFixed(2)}</h3>
                  </div>
                </div>
                <p
                  className={globalStyles.globalPBig}
                  style={{
                    width: "100%",
                    whiteSpace: "normal",
                    color: "var(--branco)",
                  }}
                >
                  {selectedServices.map((service, index) => (
                    <span key={service.id}>
                      {service.name}
                      {index === selectedServices.length - 1 ? "." : ", "}
                    </span>
                  ))}
                </p>
              </div>
              <div className={styles.priceCard}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  TOTAL
                </div>
                <div className={styles.prices}>
                  {oldValueOfSelectedServices > 0 ? (
                    <h3 className={styles.scratched}>
                      R$ {oldValueOfSelectedServices.toFixed(2)}
                    </h3>
                  ) : (
                    ""
                  )}
                  <h3 className={styles.originalValue}>
                    R$ {totalValueOfSelectedServices.toFixed(2)}
                  </h3>
                </div>
              </div>
              <h3 style={{ color: "var(--branco)", textAlign: "center" }}>
                Planos personalizados contam com uma taxa de adesão de R$120,00
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CustomPlan;
