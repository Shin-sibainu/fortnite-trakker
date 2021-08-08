import { Cards } from "./card/Cards";
import React from "react";
import { InputForSearch } from "./input/InputForSearch";
import { Title } from "./title/Title";

export const Main = () => {
  return (
    <div className="main">
      <div className="title-input-area" style={{ textAlign: "center" }}>
        <Title />
        <div className="input">
          <InputForSearch />
        </div>
      </div>
      <div style={{ textAlign: "center" }}>your status is...</div>
      <div className="cardArea">
        <Cards />
      </div>
    </div>
  );
};
