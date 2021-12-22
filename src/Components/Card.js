import React from "react";
import { Card as MCard } from "@material-ui/core";

function Card({ children, style, className }) {
  return (
    <MCard
      className={`${className}`}
      style={{
        backgroundColor: "white",
        borderRadius: "10px",
        boxShadow:
          "1px 1px 8px 1.5px rgba(0, 0, 0, 0.1), -1px -1px 8px 1.5px rgba(0, 0, 0, 0.1)",
        padding: "0.3rem 0.5rem",
        ...style,
      }}
    >
      {children}
    </MCard>
  );
}

export default Card;
