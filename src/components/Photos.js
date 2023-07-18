import { Fade } from "react-awesome-reveal";
import React from "react";
import "./Photos.css";

const Photos = () => {
  return (
    <section className="gallery-wrapper">
      <Fade cascade delay={200} triggerOnce>
        <div className="container">
          <div className="image-gallery">
            <a
              href={process.env.PUBLIC_URL + "/PublicImages/image-5.jpg"}
              className="img-1"
            >
              <i className="bx bx-expand-alt" aria-hidden="true"></i>
            </a>
            <a
              href={process.env.PUBLIC_URL + "/PublicImages/flow-esp.jpg"}
              className="img-2"
            >
              <i className="bx bx-expand-alt" aria-hidden="true"></i>
            </a>
            <a
              href={process.env.PUBLIC_URL + "/PublicImages/flow-img3.jpg"}
              className="img-3"
            >
              <i className="bx bx-expand-alt" aria-hidden="true"></i>
            </a>
            <a
              href={process.env.PUBLIC_URL + "/PublicImages/card2-bg.jpg"}
              className="img-4"
            >
              <i className="bx bx-expand-alt" aria-hidden="true"></i>
            </a>
            <a
              href={process.env.PUBLIC_URL + "/PublicImages/flow-img5.jpg"}
              className="img-5"
            >
              <i className="bx bx-expand-alt" aria-hidden="true"></i>
            </a>
            <a
              href={process.env.PUBLIC_URL + "/PublicImages/menu-coffee.jpg"}
              className="img-6"
            >
              <i className="bx bx-expand-alt" aria-hidden="true"></i>
            </a>
            <a
              href={process.env.PUBLIC_URL + "/PublicImages/hero-bg.jpg"}
              className="img-7"
            >
              <i className="bx bx-expand-alt" aria-hidden="true"></i>
            </a>
            <a
              href={process.env.PUBLIC_URL + "/PublicImages/flow-img1.jpg"}
              className="img-8"
            >
              <i className="bx bx-expand-alt" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Photos;
