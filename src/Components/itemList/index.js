import React  from "react";
import Item from "../item";


const ItemList = ({ data }) => {
  return (
    data.map(product => <Item key={product.id} data={product}></Item>)
  );
};

export default ItemList;
