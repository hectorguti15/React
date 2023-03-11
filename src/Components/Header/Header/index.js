import React from "react";
import CartWidget from "../CartWidget";
import NavBar from "../NavBar";
import { Link } from "react-router-dom";
import("./style.css");

const Header = () => {
  return (
    <div className="Header">
      <Link to="/" style={{ textDecoration: "none" }}>
        <h1 className="title">Shopping Store</h1>
      </Link>
      <NavBar>
        <CartWidget></CartWidget>
      </NavBar>
    </div>
  );
};

export default Header;
