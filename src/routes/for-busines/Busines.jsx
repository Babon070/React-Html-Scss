import React from "react";
import { AiOutlineUnorderedList } from "react-icons/ai";
import "./Busines.scss";
import Work from "../../component/stillWork/Work";
import Contack from "../../component/contact/Contack";
import ContactMap from "../../component/contact-map/Contact-map";

const Busines = () => {
  return (
    <section className="bueinesection">
      <main className="main">
        <div>
          <h2 className="busines__title">Как стать нашим партнёром</h2>

          <div className="main__wrap">
            <div className="card">
              <div>
                <span className="span"></span>
                <AiOutlineUnorderedList />
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div className="card">
              <div>
                <span className="span"></span>
                <AiOutlineUnorderedList />
              </div>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div className="card">
              <div>
                <span className="span"></span>
                <AiOutlineUnorderedList />
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
          </div>

          <div className="delivery">
            <h4>Внимание поставщикам</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              odit ratione eligendi alias expedita qui facilis eius modi. Et
              nisi voluptates nostrum reiciendis repellat nobis hic tempore
              provident amet, consequatur aspernatur eligendi minus molestias
              iure optio vitae quibusdam quo asperiores dolor dolores! Modi
              aperiam deleniti magnam aut saepe eligendi nisi maiores distinctio
              laudantium, dignissimos debitis commodi autem ducimus delectus hic
              eaque qui explicabo! Officia eaque excepturi, explicabo quas
              ducimus distinctio a odit placeat obcaecati facere est earum sit
              omnis mollitia totam debitis dolorem voluptatum consequatur beatae
              nihil repellendus at? Molestiae iure ad magni eum corporis
              doloremque. Recusandae reprehenderit in quo illo iste, cupiditate,
              reiciendis voluptatibus assumenda minus sequi eaque voluptatem
              esse tempore! Deleniti facilis aperiam minus vitae animi
              accusantium repudiandae eos eum! Sed odit distinctio quasi
              aspernatur dolorum adipisci! Numquam sit ullam facilis recusandae
              dolor nam, perferendis qui! Nostrum, quo soluta. Quas iusto neque
              quod nulla dolorem? At, sint perferendis.
            </p>
          </div>
        </div>
      </main>
      <Work />
      <Contack />
      <ContactMap />
    </section>
  );
};

export default Busines;
