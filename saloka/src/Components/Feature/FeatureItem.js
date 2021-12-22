import React from "react";

function FeatureItem({ content }) {
  return (
    <div style={{ height: "150px" }}>
      <img
        src={content}
        alt="img"
        style={{
          objectFit: "cover",
          width: "100%",
          minWidth: "100%",
          maxWidth: "100%",
          height: "100%",
          minHeight: "100%",
          borderRadius: "11px",
        }}
      />
    </div>
  );
}

export default FeatureItem;
