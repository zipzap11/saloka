import React from "react";
import styles from "./Feature.module.css";
function FeatureItem({ content }) {
  return (
    <div className={styles.wrapper}>
      <img src={content} alt="img" className={styles.image} />
    </div>
  );
}

export default FeatureItem;
