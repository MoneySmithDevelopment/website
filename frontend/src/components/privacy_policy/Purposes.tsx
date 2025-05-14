import React from "react";

const Purposes = () => {
  const purposes = [
    {
      title: "To provide and maintain our Service",
      desc: "Including to monitor the usage of our Service.",
    },
    {
      title: "To manage Your Account",
      desc: "To manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.",
    },
    {
      title: "For the performance of a contract",
      desc: "The development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.",
    },
    {
      title: "To contact You",
      desc: "To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.",
    },
    {
      title: "To provide You with news, special offers and general information",
      desc: "About other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.",
    },
    {
      title: "To manage Your requests",
      desc: "To attend and manage Your requests to Us.",
    },
    {
      title: "For business transfers",
      desc: "We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.",
    },
    {
      title: "For other purposes",
      desc: "We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.",
    },
  ];

  return (
    <div>
      {purposes.map((item, index) => (
        <li key={index}>
          <strong>{item.title}:</strong> {item.desc}
        </li>
      ))}
    </div>
  );
};

export default Purposes;
