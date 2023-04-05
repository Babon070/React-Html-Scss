import React from "react";
import Advan from "../../component/advantages/Advan";
import Work from "../../component/stillWork/Work";
import Container from "../../utilis/Container";
import "./About.scss";

const AboutUs = () => {
  return (
    <section className="aboutus">
      <Container>
        <div className="about">
          <div className="about__left">
            <h4>Кто мы такие?</h4>
            <h2>О нас</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              ab labore iusto vero dicta. Officiis quam aliquam quisquam
              accusantium reprehenderit eos architecto tempora nam veniam, iusto
              quis omnis soluta perspiciatis dolorum maxime quibusdam adipisci
              cupiditate fuga sequi, numquam iste ad.
            </p>
          </div>
          <div className="about__right">
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

        <div className="cards">
          <Advan />
        </div>
      </Container>
      <Work />
    </section>
  );
};

export default AboutUs;
