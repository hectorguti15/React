import React from "react";
import Li from "../Li";
import ('./style.css')


const NavBar = ({ children }) => {
  return (
    <div className="navBar">
      <ul className="ulList">
        <Li link={"/react"} name={"Home"} />
        <Li link={"/react/Category/Men"} name={"Men"} />
        <Li link={"/react/Category/Women"} name={"Women"} />
        <Li link={"/react/Category/Accesories"} name={"Accesories"} />
      </ul>
      {children}
    </div>
  );
};

export default NavBar;
