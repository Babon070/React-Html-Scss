import React from "react";
import Container from "../../utilis/Container";
import "./Work.scss";

const Work = () => {
  return (
    <section className="work_section">
      <Container>
        <div className="work">
          <div className="work__wrap--up">
            <h4>Как все проходит?</h4>
            <h2>Как мы работаем?</h2>
          </div>
          <div className="work__wrap--down">
            <div className="line">
              <div className="sircle"></div>
              <h4>card1</h4>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>

            <div className="line">
              <div className="sircle"></div>
              <h4>card1</h4>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>

            <div className="line">
              <div className="sircle"></div>
              <h4>card1</h4>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>

            <div className="line">
              <div className="sircle"></div>
              <h4>card1</h4>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Work;
