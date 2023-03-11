import React from "react";
import { Link } from "react-router-dom";
import("./style.css");

export const Error = () => {
  return (
    <div className="errorContainer">
      <div>
        <h1>Something was wrong! Try again</h1>
      </div>
      <Link to={"/"}>
        <button className="buttonError">Back at home</button>
      </Link>
    </div>
  );
};
