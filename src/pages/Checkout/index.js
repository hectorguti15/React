import React from "react";
import Header from "../../Components/Header/Header";
import Brief from "../../Components/Brief";

const Checkout = () => {
  return (
    <>
      <header>
        <Header></Header>
      </header>
      <main style={{display:"flex",alignItems:"center", justifyContent:"center"}}>
        <Brief></Brief>
      </main>
      
    </>
  );
};

export default Checkout;
