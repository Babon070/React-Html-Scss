import React from "react";
import BasicExample from "../../component/table/Table";
import Container from "../../utilis/Container";
import "./Calk.scss";

const Calk = () => {
  return (
    <section>
      <Container>
        <div className="calk">
          <div className="calk__wrap">
            <div className="calk__wrap--left">
              <img
                width={350}
                height={300}
                src="https://avatars.mds.yandex.net/i?id=629636c3eb53be6b419638daf1d5b834fdc2529f-9041585-images-thumbs&n=13"
                alt=""
              />
            </div>

            <div className="calk__wrap--right">
              <h3>HI MO 5LR5-72HBD</h3>
              <span className="calk_span">в наличии</span>
              <p>Цена: Договорная</p>
              <button className="btn__calk">Связаться с нами</button>
              <div className="block__calk">
                <h3>Описания</h3>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>

                <ul>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deleniti, doloribus consequuntur. Iure debitis facilis
                    saepe!
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quasi tenetur libero molestias ipsum optio nulla.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur quos in consequuntur praesentium, quas
                    cupiditate?
                  </li>
                  <li>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Sequi facere quam commodi tenetur nihil ipsam.
                  </li>
                </ul>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Calk;
