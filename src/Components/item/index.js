import React from "react";
import { Link } from "react-router-dom";
import("./style.css");

const Item = ({ data }) => {
  return (
    <div className="productContainer" key={data.id}>
      <div className="productImgContainer">
        <img className="productImgItem" src={data.img} alt=""></img>
      </div>
      <div className="productInfoContainer">
        <h1 className="producTitle">{data.title}</h1>
        <h3 className="productCategory">{data.category.toUpperCase()}</h3>
        <span className="productPrice">$ {data.price}</span>
      </div>
      <div className="buttonsProduct">
        <Link
          to={`/${data.category}/${data.title}/${data.id}`}
          style={{ textDecoration: "none" }}
        >
          <button className="moreInfo">View More</button>
        </Link>
        
      </div>
    </div>
  );
};

export default Item;
