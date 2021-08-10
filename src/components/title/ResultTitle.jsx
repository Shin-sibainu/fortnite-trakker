import React from "react";

export const ResultTitle = (props) => {
  return (
    <div>
      <div style={{ textAlign: "center", fontSize: 25, fontFamily: "Anton" }}>
        {props.children}
      </div>
    </div>
  );
};
