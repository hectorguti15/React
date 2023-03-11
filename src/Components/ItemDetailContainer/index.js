import React, {useState, useEffect, useContext} from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../itemDetail";
import {db} from "../../FireBase/firebaseConfig"
import { collection, getDocs, query, where,documentId } from "firebase/firestore";
import { Loader } from "../Loader";
import { cartListContext } from "../CartList";


export const ItemDetailContainer = () => {
  let { id } = useParams();
  const {load, setLoading} = useContext(cartListContext)
  const [item, setItem] = useState([])

  useEffect(() => {
    setLoading(true)
    const getClothes = async () =>{
      const q = query(collection(db, "clothes"), where(documentId(), "==", id));
      const querySnapshot = await getDocs(q);
      const docs = [];
      querySnapshot.forEach((doc) =>{
        docs.push({...doc.data() , id:doc.id})
      })
      setItem(docs[0])
    };
     
    getClothes();

    setLoading(false)
  }, [id,setLoading]);


  return (
    <>{load ? <Loader></Loader> : <ItemDetail item={item}></ItemDetail>}</>
  );
};
