import React from "react";
import { Animals } from "./Animals";
import { Plants } from "./Plants";
import "../styles/FrontPage.css";

interface Empty {}

export const FrontPage: React.FC<Empty> = () => {
  return (
    <React.Fragment>
      <h1>Database of Animals and Plants</h1>
      <div id="animals">
        <Animals />
      </div>
      <div id="plants">
        <Plants />
      </div>
    </React.Fragment>
  );
};
