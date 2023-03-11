import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../FireBase/firebaseConfig";
import {
  collection,
  getDocs,
  query,
  where,
  documentId,
} from "firebase/firestore";
import { Loader } from "../Loader";
import("./style.css");

const ImageComponent = () => {
  let { id } = useParams();

  const [image, setImage] = useState([]);

  useEffect(() => {
    const getClothes = async () => {
      const q = query(collection(db, "clothes"), where(documentId(), "==", id));
      const querySnapshot = await getDocs(q);
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setImage(docs[0].img);
    };

    getClothes();
  }, [id]);

  return (
    <>{image ? <div className="onlyImgContainer">
    <div>
      <img className="onlyImgItem" src={image} alt=""></img>
    </div>
  </div> : <Loader></Loader>}</>
  );
};

export default ImageComponent;