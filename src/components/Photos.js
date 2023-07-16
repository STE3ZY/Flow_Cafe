import React from "react";
import "./Photos.css";

const Photos = () => {
  return (
    <section className="gallery-wrapper">
      <div className="container">
        <div className="image-gallery">
          <a
            href={process.env.PUBLIC_URL + "/PublicImages/image-5.jpg"}
            className="img-1"
          >
            <i class="bx bx-expand-alt" aria-hidden="true"></i>
          </a>
          <a
            href={process.env.PUBLIC_URL + "/PublicImages/flow-esp.jpg"}
            className="img-2"
          >
            <i class="bx bx-expand-alt" aria-hidden="true"></i>
          </a>
          <a
            href={process.env.PUBLIC_URL + "/PublicImages/flow-img3.jpg"}
            className="img-3"
          >
            <i class="bx bx-expand-alt" aria-hidden="true"></i>
          </a>
          <a
            href={process.env.PUBLIC_URL + "/PublicImages/card2-bg.jpg"}
            className="img-4"
          >
            <i class="bx bx-expand-alt" aria-hidden="true"></i>
          </a>
          <a
            href={process.env.PUBLIC_URL + "/PublicImages/flow-img5.jpg"}
            className="img-5"
          >
            <i class="bx bx-expand-alt" aria-hidden="true"></i>
          </a>
          <a
            href={process.env.PUBLIC_URL + "/PublicImages/menu-coffee.jpg"}
            className="img-6"
          >
            <i class="bx bx-expand-alt" aria-hidden="true"></i>
          </a>
          <a
            href={process.env.PUBLIC_URL + "/PublicImages/hero-bg.jpg"}
            className="img-7"
          >
            <i class="bx bx-expand-alt" aria-hidden="true"></i>
          </a>
          <a
            href={process.env.PUBLIC_URL + "/PublicImages/flow-img1.jpg"}
            className="img-8"
          >
            <i class="bx bx-expand-alt" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Photos;
