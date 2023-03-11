import React from "react";
import { ItemCount } from "../itemCount";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

import("./style.css");

export const ItemDetail = ({ item }) => {
  return (
    <>
      <header>
        <Header></Header>
      </header>
      <main>
        <div className="detailContainer">
          <div className="Info">
            <Link to={`/react/image/${item.id}`}style={{cursor:"pointer"}}>
              <div className="imgContainer">
                <img className="imgItem" src={item.img} alt=""></img>
              </div>
            </Link>
            <div className="Details">
              <div className="upperDetails">
                <h1 className="detailTitle">{item.title}</h1>
                <h3 className="detailCategory">{item.category}</h3>
                <p className="detailDescription">{item.description}</p>
              </div>
              <div className="lowerDetails">
                <span className="detailPrice">$ {item.price}</span>
                <ItemCount data={item}></ItemCount>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
