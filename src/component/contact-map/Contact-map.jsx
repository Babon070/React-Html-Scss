import React from "react";
import Container from "../../utilis/Container";
import "./Contacts.scss";
import { HiLocationMarker } from "react-icons/hi";
import { BsTelephone, BsGlobe, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { SlEnvolopeLetter } from "react-icons/sl";
import { TbBrandTelegram } from "react-icons/tb";
import { AiOutlineFacebook } from "react-icons/ai";

const ContactMap = () => {
  return (
    <section>
      <Container>
        <div className="map">
          <div className="map__left">
            <h4 className="map__title">Как снами связаться?</h4>
            <h2 className="map__head">Наши контакты</h2>
            <div className="map__adress-block">
              <div className="svg">
                <HiLocationMarker />
              </div>
              <div>
                <h4>Адрес</h4>
                <span>г Ташкент улица Фмпра ИМПпа 432</span>
              </div>
            </div>

            <div className="map__adress-block">
              <div className="svg">
                <BsTelephone />
              </div>
              <div>
                <h4>71 818 88 88</h4>
                <span>Мы всегда рады вам помочь</span>
              </div>
            </div>

            <div className="map__adress-block">
              <div className="svg">
                <SlEnvolopeLetter />
              </div>
              <div>
                <h4>info@sitename.ru</h4>
                <span>Альтернативный способ связаться с нами</span>
              </div>
            </div>

            <div className="map__adress-block">
              <div className="svg">
                <BsGlobe />
              </div>
              <div>
                <span>Подписывайтесь на нас в соцсетях</span>
                <div>
                  <TbBrandTelegram />
                  <BsInstagram />
                  <AiOutlineFacebook />
                  <BsWhatsapp />
                </div>
              </div>
            </div>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d95891.77883187987!2d69.238784!3d41.3171712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1680626668916!5m2!1sru!2s"
              width="600"
              height="400"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactMap;
