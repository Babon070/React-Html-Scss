import React from "react";
import "./Footer.scss";
import Container from "../../utilis/Container";
import logo from "../../asset/logo.png";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { TbBrandTelegram } from "react-icons/tb";
import { AiOutlineFacebook } from "react-icons/ai";

export default function Footer() {
  return (
    <section className="footer">
      <Container>
        <div className="footer">
          <div className="footer__up">
            <div>
              {" "}
              <img className="footer__logo" src={logo} alt="" />
            </div>
            <div>
              <h4>На сайте</h4>
              <ul>
                <li>О нас</li>
                <li>Решение</li>
                <li>Продукция</li>
                <li>Сервисный центр</li>
                <li>Калькулятор</li>
                <li>Для инвесторов</li>
                <li>Контакты</li>
              </ul>
            </div>

            <div>
              <h4>Наша продукции</h4>
              <ul>
                <li>Солнечные панели</li>
                <li>Солнечные инвертор</li>
                <li>Солнечная батарея</li>
              </ul>
            </div>

            <div>
              <h4>Наши контакты</h4>
              <ul>
                <li>
                  1030445 г Ташкент <br /> улица Фмпра ИМПпа 432
                </li>
                <li>
                  +998-71-788-78-87 <br />
                  +998-71-788-78-87
                </li>
                <li>info@sitename.com</li>
                <li>
                  <div className="footer__icon">
                    <TbBrandTelegram />
                    <BsInstagram />
                    <AiOutlineFacebook />
                    <BsWhatsapp />
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__bot">
            <div>
              <span>2023 Все права защищены</span>
              <span>Создание сайта Supersite</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
