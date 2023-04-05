import React from "react";
import Container from "../../utilis/Container";
import "./Contack.scss";
import logo from "../../asset/logo.png";

const Contack = () => {
  return (
    <section>
      <Container>
        <form className="form__contact">
          <div className="form__contact--resume">
            <div className="form__contact--resume-left">
              <div>
                <h2>
                  Оставьте свои данные чтобы получить бесплатную консультацию
                </h2>
                <p>Наши специалисты свяжутся с вами течении дня</p>
              </div>
              <img src={logo} alt="" />
              <div className="hr-line"></div>
            </div>

            <div className="form__resume--right">
              <form>
                <div className="form__wrap">
                  <input type="text" placeholder="Имя" />
                  <input type="text" placeholder="Номер телефона" />
                  <input type="text" placeholder="Ваше примечание" />
                </div>
                <div className="forma__otpravka">
                  <button className="form__wrap-btn">Посмотреть все</button>
                </div>
              </form>
            </div>
          </div>
        </form>
      </Container>
    </section>
  );
};

export default Contack;
