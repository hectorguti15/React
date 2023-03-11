import React from "react";
import Header from "../../Components/Header/Header";
import ItemListContainer from "../../Components/ItemListContainer";

const Men = () => {
  return (
    <>
      <header>
        <Header></Header>
      </header>
      <main>
        <ItemListContainer rule={"category"} category={"MEN'S CLOTHING"}></ItemListContainer>
      </main>
    </>
  );
};

export default Men;
