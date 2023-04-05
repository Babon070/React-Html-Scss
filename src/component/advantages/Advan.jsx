import React from "react";
import Container from "../../utilis/Container";
import "./Advan.scss";

const Advan = () => {
  return (
    <section>
      <Container>
        <div className="addven">
          <div className="addven__top">
            <h4>Почему мы?</h4>
            <h2>Наши преимущества</h2>
          </div>

          <div className="addven__bottom">
            <div>
              <div className="addven__bottom--wrap-one">
                <div>
                  <h4>Опытные специалисты</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                </div>
                <img
                  src="https://cdn3.iconfinder.com/data/icons/eldorado-stroke-symbols/40/shape_hexagon-1024.png"
                  alt=""
                />
                <img
                  src="https://cdn3.iconfinder.com/data/icons/eldorado-stroke-symbols/40/shape_hexagon-1024.png"
                  alt=""
                />
                <div>
                  <h4>Гарантия качества</h4>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Aspernatur, laborum quam.
                  </p>
                </div>
              </div>
              <div className="addven__bottom--wrap-two">
                <div>
                  <h4>Опытные специалисты</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit!
                  </p>
                </div>
                <img
                  src="https://cdn3.iconfinder.com/data/icons/eldorado-stroke-symbols/40/shape_hexagon-1024.png"
                  alt=""
                />
                <img
                  src="https://cdn3.iconfinder.com/data/icons/eldorado-stroke-symbols/40/shape_hexagon-1024.png"
                  alt=""
                />
                <div>
                  <h4>Гарантия качества</h4>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Advan;
