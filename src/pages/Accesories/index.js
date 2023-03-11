import React from "react";
import Header from "../../Components/Header/Header";
import ItemListContainer from "../../Components/ItemListContainer";

const Accesories = () => {
  return (
    <>
      <header>
        <Header></Header>
      </header>
      <main>
      <ItemListContainer rule={"category"} category={"ACCESORIES"}></ItemListContainer>
      </main>
    </>
  );
};

export default Accesories;
