import React from "react";
import Header from "../../Components/Header/Header";
import ItemListContainer from "../../Components/ItemListContainer";

const Women = () => {
  return (
    <>
      <header>
        <Header></Header>
      </header>
      <main>
      <ItemListContainer rule={"category"} category={"WOMEN'S CLOTHING"}></ItemListContainer>
      </main>
    </>
  );
};

export default Women;
