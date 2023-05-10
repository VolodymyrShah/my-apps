import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../img/img1.png";
import img2 from "../img/img2.png";
import img3 from "../img/img3.png";

function CarouselComponent() {
  return (
    <Carousel className="mx-auto w-100" style={{ maxWidth: "800px" }}>
      <Carousel.Item>
        <img className="d-block w-100" src={img1} />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img2} />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img3} />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
