import React from "react";
import Header from "../../Components/Header/Header";
import ItemListContainer from "../../Components/ItemListContainer";


const Home = () => {
  return (
    <>
      <header>
        <Header></Header>
      </header>
      <main>
        <ItemListContainer rule={"type"} category={"product"}></ItemListContainer>
      </main>
      
    </>
  );
};

export default Home;
