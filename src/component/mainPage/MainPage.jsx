import React from "react";
import Container from "../../utilis/Container";
import "./MainPage.scss";
import logo from "../../asset/headerGes.jpg";

const MainPage = () => {
  return (
    <section className="section">
      <Container>
        <div className="main__wrapper">
          <div className="main__wrapper--left">
            <h1>AO O'ZBEKENERGOTA'MIR </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores suscipit quia provident iure nam architecto assumenda
              vel eligendi magnam in?
            </p>
            <button className="main__wrapper--btn">Связаться с нами</button>
          </div>
          <div className="main__wrapper--right">
            <img className="main__logo" src={logo} alt="" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MainPage;
