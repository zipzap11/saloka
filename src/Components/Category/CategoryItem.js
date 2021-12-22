import React from "react";
import Card from "../Card";
import styles from "./Categories.module.css";
function CategoryItem({ content, name }) {
  return (
    <Card style={{ padding: "0" }}>
      <div className={styles.card}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className={styles.wrapper}>
            <img src={content} alt="img" style={{ marginBottom: ".2rem" }} />
          </div>
          <p className={styles.name}>{name}</p>
        </div>
      </div>
    </Card>
  );
}

export default CategoryItem;
