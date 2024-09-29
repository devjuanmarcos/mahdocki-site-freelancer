import React, { useState } from "react";
import PlanCard from "components/Card/PlanCard";
import plansData from "./data";
import styles from "./CustomPlan.module.css";
import styles2 from "./CustomPlan2.module.css";
import globalStyles from "styles/globalText.module.css";
// eslint-disable-next-line
import imageTitle from "assets/images/Free shipping-amico.svg";
import Button from "components/Button";

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
  Segue os serviços que selecionei: 
  ${servicesString}
  `;

  const codifyMensage = encodeURIComponent(mensage);

  const numberWpp = "5524981319462";
  const linkWpp = `https://wa.me/${numberWpp}/?text=${codifyMensage}`;
  console.log(linkWpp);

  return (
    <span>Site desativado</span>

    // <>
    //   <section
    //     className={styles.cardCustomPlan}
    //     id='cover'
    //   >
    //     <div className={styles2.cardValue}>
    //       <div className={styles2.contentBase}>
    //         <div className={styles2.valueCard}>
    //           <div className={styles2.valueCardContent}>
    //             <div className={styles2.imageTitle}>
    //               <img
    //                 className={styles2.image}
    //                 src={imageTitle}
    //                 alt='none'
    //               />
    //               <h3
    //                 className={globalStyles.globalH3}
    //                 style={{ color: "var(--branco) ", fontSize: "24px" }}
    //               >
    //                 Plano personalizado
    //               </h3>
    //             </div>
    //             <div className={styles2.quantInfo}>
    //               <div className={styles2.quant}>
    //                 {numberOfSelectedServices > 0 ? (
    //                   <div className={styles2.quantJust}>
    //                     <h3>{numberOfSelectedServices}</h3>
    //                     <h3 style={{ marginLeft: "4px" }}>
    //                       Coberturas selecionadas
    //                     </h3>
    //                   </div>
    //                 ) : (
    //                   <h3 className={styles2.colorAlign}>
    //                     Escolha abaixo os serviços que mais se encaixam no seu
    //                     gosto.
    //                   </h3>
    //                 )}
    //               </div>
    //               <p
    //                 className={globalStyles.globalPBig}
    //                 style={{
    //                   width: "100%",
    //                   whiteSpace: "normal",
    //                   color: "var(--branco)",
    //                 }}
    //               >
    //                 {selectedServices.map((service, index) => (
    //                   <span key={service.id}>
    //                     {service.name}
    //                     {index === selectedServices.length - 1 ? "." : ", "}
    //                   </span>
    //                 ))}
    //               </p>
    //             </div>
    //             <div className={styles2.priceCard}>
    //               <div style={{ display: "flex", alignItems: "center" }}>
    //                 TOTAL
    //               </div>
    //               <div className={styles2.prices}>
    //                 {oldValueOfSelectedServices > 0 ? (
    //                   <h3 className={styles2.scratched}>
    //                     R$ {oldValueOfSelectedServices.toFixed(2)}
    //                   </h3>
    //                 ) : (
    //                   ""
    //                 )}
    //                 <h3 className={styles2.originalValue}>
    //                   R$ {totalValueOfSelectedServices.toFixed(2)}
    //                 </h3>
    //               </div>
    //             </div>
    //             {numberOfSelectedServices > 0 ? (
    //               <h3 className={styles2.colorAlign}>
    //                 Planos personalizados contam com uma taxa de adesão de
    //                 R$120,00
    //               </h3>
    //             ) : (
    //               <div style={{ marginBottom: "30px" }}></div>
    //             )}
    //           </div>
    //         </div>
    //       </div>
    //       <div className={styles2.button}>
    //         {numberOfSelectedServices > 0 ? (
    //           <Button
    //             link={linkWpp}
    //             children='CONCLUIR'
    //           />
    //         ) : (
    //           ""
    //         )}
    //       </div>
    //     </div>
    //     <div className={styles.apresentation}>
    //       <h1
    //         className={globalStyles.globalH1}
    //         style={{ color: "var(--preto)", marginBottom: "8px" }}
    //       >
    //         Monte seu plano do seu jeito!
    //       </h1>
    //       <h3
    //         className={globalStyles.globalH3}
    //         style={{ textAlign: "center", marginBottom: "0px" }}
    //       >
    //         Escolha os serviços que mais lhe agradam para montar um pacote
    //         personalizado, podendo ser alterado a qualquer momento.
    //       </h3>
    //     </div>
    //     <div className={styles.cardSelect}>
    //       {plans.map((plan) => (
    //         <PlanCard
    //           key={plan.id}
    //           plan={plan}
    //           onServiceToggle={toggleService}
    //           onPlanToggle={togglePlan}
    //         />
    //       ))}
    //     </div>
    //   </section>
    //   <section className={styles.cardValue}>
    //     <div className={styles.contentBase}>
    //       <div className={styles.valueCard}>
    //         <div className={styles.valueCardContent}>
    //           <div className={styles.imageTitle}>
    //             <img
    //               className={styles.image}
    //               src={imageTitle}
    //               alt='none'
    //             />
    //             <h3
    //               className={globalStyles.globalH3}
    //               style={{ color: "var(--branco) ", fontSize: "24px" }}
    //             >
    //               Plano personalizado
    //             </h3>
    //           </div>
    //           <div className={styles.quantInfo}>
    //             <div className={styles.quant}>
    //               <div className={styles.quantJust}>
    //                 <h3>{numberOfSelectedServices}</h3>
    //                 <h3 style={{ marginLeft: "4px" }}>Coberturas</h3>
    //               </div>
    //               <div className={styles.quantJust}>
    //                 <h3>{"R$"}</h3>
    //                 <h3> {totalValueOfSelectedServices.toFixed(2)}</h3>
    //               </div>
    //             </div>
    //             <p
    //               className={globalStyles.globalPBig}
    //               style={{
    //                 width: "100%",
    //                 whiteSpace: "normal",
    //                 color: "var(--branco)",
    //               }}
    //             >
    //               {selectedServices.map((service, index) => (
    //                 <span key={service.id}>
    //                   {service.name}
    //                   {index === selectedServices.length - 1 ? "." : ", "}
    //                 </span>
    //               ))}
    //             </p>
    //           </div>
    //           <a
    //             className={styles.priceCard}
    //             href='#cover'
    //           >
    //             <div style={{ display: "flex", alignItems: "center" }}>
    //               TOTAL
    //             </div>
    //             <div className={styles.prices}>
    //               {oldValueOfSelectedServices > 0 ? (
    //                 <h3 className={styles.scratched}>
    //                   R$ {oldValueOfSelectedServices.toFixed(2)}
    //                 </h3>
    //               ) : (
    //                 ""
    //               )}
    //               <h3 className={styles.originalValue}>
    //                 R$ {totalValueOfSelectedServices.toFixed(2)}
    //               </h3>
    //             </div>
    //           </a>
    //           <h3 className={styles.colorAlign}>
    //             Planos personalizados contam com uma taxa de adesão de R$120,00
    //           </h3>
    //         </div>
    //       </div>
    //     </div>
    //     <div className={styles.button}>
    //       <Button
    //         link={linkWpp}
    //         children='CONCLUIR'
    //       />
    //     </div>
    //   </section>
    // </>
  );
}

export default CustomPlan;
