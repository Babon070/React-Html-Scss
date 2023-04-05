import React from "react";
import { Link } from "react-router-dom";
import Container from "../../utilis/Container";
import "./Products.scss";

const Products = () => {
  return (
    <section>
      <Container>
        <div className="product__wrapper">
          <div className="product__wrapper--top">
            <h4>Что мы продаем?</h4>
            <h2>Наша продукция</h2>
            <div>
              <button className="product__wrapper--top-btn">
                Солнечные панели
              </button>
              <button className="product__wrapper--top-btn">
                Солнечные инвертор
              </button>
              <button className="product__wrapper--top-btn">
                Аккумуляторная батарея
              </button>
            </div>
          </div>

          <div className="product__wrapper--bottom">
            <div className="card__products">
              <img
                src="https://avatars.mds.yandex.net/i?id=7793892e55f29d84e458f85a6e7632e8e8f6362f-8271677-images-thumbs&n=13"
                alt=""
              />
              <div>
                <h4>HI MO 5HLR-72HBD</h4>
                <Link className="card__products--info" to="/">
                  Подробнее...
                </Link>
              </div>
            </div>

            <div className="card__products">
              <img
                src="https://avatars.mds.yandex.net/i?id=07f5a92d5643d5aac1dbc6932d671a3385cd461a-7953126-images-thumbs&n=13"
                alt=""
              />
              <div>
                <h4>HI MO 5HLR-72HBD</h4>
                <Link className="card__products--info" to="/">
                  Подробнее...
                </Link>
              </div>
            </div>

            <div className="card__products">
              <img
                src="https://avatars.mds.yandex.net/i?id=8531b801626f889ed0c31e5eb2599961bbe54fb2-8185142-images-thumbs&n=13"
                alt=""
              />
              <div>
                <h4>HI MO 5HLR-72HBD</h4>
                <Link className="card__products--info" to="/">
                  Подробнее...
                </Link>
              </div>
            </div>
          </div>
          <div className="btn-btn">
            <button className="product__wrapper--btn">Посмотреть все</button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Products;
