import { Typography } from "@material-ui/core";
import React from "react";
import GreenRadio from "../GreenRadio";

function ShippingOption({ title, info, price, value, onClick }) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <GreenRadio onClick={onClick} value={value} name={title} />
      <div>
        <h5
          style={{
            color: "#43A047",
            fontSize: "16px",
            fontWeight: "700",
            letterSpacing: "1px",
            marginBottom: ".4rem",
          }}
        >
          {title}
        </h5>
        <Typography style={{ color: "grey" }} gutterBottom variant="subtitle2">
          Rp. {price}
        </Typography>
        <p style={{ color: "#6C6C6C", fontSize: "14px" }}>{info}</p>
      </div>
    </div>
  );
}

export default ShippingOption;
