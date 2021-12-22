import React from "react";

function Container({ isMobile, children }) {
  let containerMarginTop = "2rem";
  if (isMobile) {
    containerMarginTop = "1rem";
  }
  return (
    <div
      style={{
        width: "90%",
        margin: "0 auto",
        marginTop: containerMarginTop,
        marginBottom: "4rem",
        minHeight: "80vh",
      }}
    >
      {children}
    </div>
  );
}

export default Container;
