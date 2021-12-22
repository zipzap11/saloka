import React from "react";
import style from "./NavigatorHead.module.css";

const STEPS = ["Cart", "Details", "Shipping", "Payment"];
function NavigatorHead({ stepIdx }) {
  return (
    <div className={style.contain}>
      <ul>
        {STEPS.map((step, idx) => {
          if (idx !== STEPS.length - 1) {
            step = `${step}   >   `;
          }
          if (idx === stepIdx) {
            return (
              <li key={idx} className={`${style.navigator} ${style.active}`}>
                {step}
              </li>
            );
          }
          return (
            <li key={idx} className={style.navigator}>
              {step}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default NavigatorHead;
