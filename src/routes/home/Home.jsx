import React from "react";
import About from "../../component/about/About";
import Advan from "../../component/advantages/Advan";
import Calculator from "../../component/calculator/Calculator";
import ContactMap from "../../component/contact-map/Contact-map";
import Contack from "../../component/contact/Contack";
import MainPage from "../../component/mainPage/MainPage";
import Products from "../../component/products/Products";
import Work from "../../component/stillWork/Work";

const Home = () => {
  return (
    <>
      <main>
        <MainPage />
        <About />
        <Products />
        <Advan />
        <Calculator />
        <Work />
        <Contack />
        <ContactMap />
      </main>
    </>
  );
};

export default Home;
