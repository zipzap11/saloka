import React from "react";
import { Link } from "react-router-dom";
import { Card } from "@material-ui/core";
import style from "./Recommendation.module.css";
function RecommendationItem({ content, name, price, sold }) {
  return (
    <Card className={style.card} style={{ padding: "0 0" }}>
      <Link className={style.link} to="/product-detail">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0",
          }}
        >
          <img
            src={content}
            alt="img"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
          <h4
            style={{
              fontSize: "18px",
              fontWeight: "500",
              margin: ".5rem auto",
              width: "94%",
            }}
          >
            {name}
          </h4>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "94%",
              alignItems: "center",
              margin: ".5rem auto",
              boxSizing: "border-box",
              fontSize: "13px",
            }}
          >
            <p>Rp.{price}</p>
            <p>{sold}</p>
          </div>
        </div>
      </Link>
    </Card>
  );
}

export default RecommendationItem;
