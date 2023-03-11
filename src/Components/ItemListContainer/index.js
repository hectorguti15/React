import React, { useContext, useEffect, useState } from "react";
import { db } from "../../FireBase/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import ItemList from "../itemList";
import { Loader } from "../Loader";
import { cartListContext } from "../CartList";


const ItemListContainer = ({ category, rule }) => {
  const [products, setProducts] = useState([]);
  const {load, setLoading} = useContext(cartListContext)

  useEffect(() => {
    setLoading(true)
    const getClothes = async () => {
      const q = query(
        collection(db, "clothes"),
        where(`${rule}`, "==", `${category}`)
      );
      const querySnapshot = await getDocs(q);
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProducts(docs);
    };

    getClothes();
    setLoading(false)
  }, [rule, category, setLoading]);

  return (
    <>
      {load ? (
        <Loader></Loader>
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <ItemList data={products}></ItemList>
        </div>
      )}
    </>
  );
};

export default ItemListContainer;
