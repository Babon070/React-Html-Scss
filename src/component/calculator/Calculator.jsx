import React from "react";
import Container from "../../utilis/Container";
import "./Calculator.scss";

const Calculator = () => {
  return (
    <section>
      <Container>
        <form className="form_calc" method="GET">
          <div className="wrap">
            <h1 className="form__tite">Бесплатный калькулятор</h1>
            <div className="main-user-info">
              <div className="user-input-box">
                <label for="fullName">Ismingiz</label>
                <input type="text" />
              </div>
              <div className="user-input-box">
                <label for="username">Telefon raqamingiz</label>
                <input type="text" />
              </div>
              <div className="user-input-box">
                <label>Yuborish joyi</label>
                <input type="text" />
              </div>
              <div className="user-input-box">
                <label>Qabul qilinadigon joy</label>
                <input type="text" />
              </div>
              <div className="user-input-box">
                <label for="password">Xizmat turini tanlang</label>
                <input type="text" />
              </div>
              <div className="user-input-box">
                <label for="confirmPassword">Yuk og'irligi</label>
                <input type="text" />
              </div>
              <button className="form__btn">Рассчитать</button>
            </div>
          </div>
        </form>
      </Container>
    </section>
  );
};

export default Calculator;
