import React from "react";
import Li from "../Li";
import ('./style.css')


const NavBar = ({ children }) => {
  return (
    <div className="navBar">
      <ul className="ulList">
        <Li link={"/"} name={"Home"} />
        <Li link={"/Category/Men"} name={"Men"} />
        <Li link={"/Category/Women"} name={"Women"} />
        <Li link={"/Category/Accesories"} name={"Accesories"} />
      </ul>
      {children}
    </div>
  );
};

export default NavBar;
