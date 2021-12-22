import React from "react";
import InformationList from "./InformationList";
import style from "./OrderInformation.module.css";

function OrderInformation() {
  const INFO = [
    {
      title: "Return Policy",
      content:
        "This is our example return policy which is everything you need to know about our returns.",
    },
    {
      title: "Shipping Options",
      content:
        "This is our example return policy which is everything you need to know about our returns.",
    },
    {
      title: "Return Policy",
      content:
        "This is our example return policy which is everything you need to know about our returns.",
    },
  ];
  return (
    <div className={style.contain}>
      <h3>Order Information</h3>
      {INFO.map((info, idx) => {
        return (
          <InformationList
            key={idx}
            title={info.title}
            content={info.content}
          />
        );
      })}
    </div>
  );
}

export default OrderInformation;
