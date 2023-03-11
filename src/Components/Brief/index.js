import React, { useContext, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../FireBase/firebaseConfig";
import { cartListContext } from "../CartList";
import("./style.css");

const initialState = {
  name: "",
  lastName: "",
  phone: "",
  email: "",
  secondEmail: "",
};

const Brief = () => {
  const {
    products,
    setProducts,
    quantityProducts,
    total,
    setTotal,
    setQuantityProducts,
  } = useContext(cartListContext);

  const [values, setValues] = useState(initialState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
  };

  const [purchaseId, setPurchaseId] = useState("");
  const date = new Date();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, "purchases"), {
      values, products, date, total
    });
    setPurchaseId(docRef.id);
    setValues(initialState);
  };

  

  const deleteItem = (data) => {
    let filter = products.filter((item) => {
      if (item.id !== data.id) {
        return item;
      } else {
        setTotal(total - item.quantity * item.price);
        setQuantityProducts(quantityProducts - item.quantity);
      }
    });

    setProducts([...filter]); 
  };

  const totalFixed = total.toFixed(2);
  return (
    <div className="items">
      <table className="itemsTable">
        <thead className="theadItem">
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="tbodyItem">
          {products.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.quantity}</td>
              <td>{item.price} $</td>
              <td>
                <span
                  style={{ cursor: "pointer" }}
                  className="material-symbols-outlined"
                  onClick={() => deleteItem(item)}
                >
                  delete
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="itemsInfo">
        <h2 className="quanitytItems">
          Cantidad de productos - {quantityProducts}
        </h2>
        <h2 className="totalItems">Total a pagar - {totalFixed} $</h2>
      </div>
      <hr className="line"></hr>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <h1 className="h1Form">Register</h1>
          <input
            className="nameForm"
            name="name"
            type="text"
            placeholder="Name"
            value={values.name}
            onChange={handleOnChange}
            required
          ></input>
          <input
            className="lastNameForm"
            name="lastName"
            type="text"
            placeholder="Last Name"
            value={values.lastName}
            onChange={handleOnChange}
          ></input>
          <input
            className="phoneNumberForm"
            name="phone"
            type="number"
            placeholder="Phone Number"
            value={values.phone}
            onChange={handleOnChange}
          ></input>

          <input
            className="emailForm"
            name="email"
            type="email"
            placeholder="Email"
            value={values.email}
            onChange={handleOnChange}
            required
          ></input>
          <input
            className="emailForm"
            name="secondEmail"
            type="email"
            placeholder="Confirmar email"
            value={values.secondEmail}
            onChange={handleOnChange}
            required
          ></input>
          {values.email === values.secondEmail ||
          values.secondEmail === "" ? null : (
            <span className="spanemails">The emails adress are different</span>
          )}

          {values.email === values.secondEmail &&
          values.name !== "" &&
          values.lastName !== "" &&
          values.phone !== "" &&
          values.email !== "" &&
          values.secondEmail !== "" ? (
            <button className="sendForm">Send</button>
          ) : null}
          {purchaseId && (
          <div className="purchaseId">
            <h2>Successful purchase, transaction id is {purchaseId}</h2>
          </div>
        )}
        </form>

        
      </div>
    </div>
  );
};
export default Brief;
