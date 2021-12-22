import React, { useState } from "react";

function InformationList({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  function clickHandler() {
    setIsOpen((prev) => {
      return !prev;
    });
  }
  let icon = isOpen ? "-" : "+";
  return (
    <div style={{ borderBottom: "1px solid #909090", color: {}, width: "50%" }}>
      <button
        onClick={clickHandler}
        style={{
          padding: ".8rem 0",
          fontSize: "16px",
          color: "#909090",
          border: "none",
          outline: "none",
          backgroundColor: "transparent",
          width: "100%",
          textAlign: "left",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {title}
        <span style={{ fontSize: "1.3rem" }}>{icon}</span>
      </button>
      {isOpen && (
        <p style={{ color: "#909090", marginBottom: ".5rem" }}>{content}</p>
      )}
    </div>
  );
}

export default InformationList;
