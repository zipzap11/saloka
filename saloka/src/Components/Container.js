import React from "react";

function Container({ children }) {
  return (
    <div
      style={{
        width: "90%",
        margin: "2rem auto",
        marginBottom: "4rem",
        minHeight: "80vh",
      }}
    >
      {children}
    </div>
  );
}

export default Container;
