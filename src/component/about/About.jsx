import React from "react";
import Container from "../../utilis/Container";
import "./About.scss";

const About = () => {
  return (
    <section>
      <Container>
        <div className="about__wrapper">
          <div className="about__wrapper--left">
            <h4>Кто мы такие?</h4>
            <h2>О нас</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              ab labore iusto vero dicta. Officiis quam aliquam quisquam
              accusantium reprehenderit eos architecto tempora nam veniam, iusto
              quis omnis soluta perspiciatis dolorum maxime quibusdam adipisci
              cupiditate fuga sequi, numquam iste ad.
            </p>
            <button className="about__wrapper--left-btn">Подробнее</button>
            <div className="panell">
              <img
                width={400}
                src="https://mir-s3-cdn-cf.behance.net/projects/max_808/08f67f114794893.Y3JvcCw4NTIsNjY3LDczLDA.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="about__wrapper--right">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/IjDzDWAf2bE"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;      web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
