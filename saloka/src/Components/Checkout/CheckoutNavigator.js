import React, { useState } from "react";
import DetailsForm from "./DetailsForm";
import ShippingForm from "./ShippingForm";
import PaymentForm from "./PaymentForm";
import NavigatorHead from "./NavigatorHead";

const forms = [DetailsForm, ShippingForm, PaymentForm];

function CheckoutNavigator({ onFinish }) {
  const [step, setStep] = useState(1);
  function nextStep() {
    if (step === forms.length) {
      onFinish();
    }
    setStep((prev) => {
      return prev + 1;
    });
  }

  const Form = forms[step - 1];
  return (
    <div
      style={{
        width: "50%",
        maxWidth: "500px",
        marginRight: "5rem",
      }}
    >
      <NavigatorHead stepIdx={step} />
      <Form onNext={nextStep} />
    </div>
  );
}

export default CheckoutNavigator;
