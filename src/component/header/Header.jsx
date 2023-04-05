import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Container from "../../utilis/Container";
import logo from "../../asset/logo.png";
import "./Header.scss";
import { RxHamburgerMenu } from "react-icons/rx";
const Header = () => {
  const navigator = useRef();

  let prevScrollPos = window.pageYOffset;
  window.addEventListener("scroll", function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
      navigator.current.style.top = "0px";
    } else {
      navigator.current.style.top = "-72px";
    }
    prevScrollPos = currentScrollPos;
  });

  return (
    <header ref={navigator}>
      <Container>
        <div className="header__wrapper">
          <Link to="/">
            <img className="header__wrapper--logo" src={logo} alt="" />
          </Link>
          <div>
            <RxHamburgerMenu className="icon_hamburg" />
          </div>
          <nav className="header__wrapper--nav">
            <Link to="/about">О нас</Link>
            <Link to="/">Решение</Link>
            <Link to="/products">Продукция</Link>
            <Link to="/servissentir">Сервисный центр</Link>
            <Link to="/calk">Калькулятор</Link>
            <Link to="/busines">Для инвесторов</Link>
            <Link to="/contact">Контакты</Link>

            <ul className="language">
              <li className="flag flag_uz">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/330/330495.png"
                  alt=""
                />
              </li>
              <li className="flag flag_ru">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/330/330437.png"
                  alt=""
                />
              </li>
              <li className="flag flag_eng">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/330/330425.png"
                  alt=""
                />
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
