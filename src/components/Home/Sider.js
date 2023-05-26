import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

import slider1 from "../../images/slider1.png";
import slider2 from "../../images/slider4.png";


const Silder1 = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className="slider-background1" interval={2000}>
        <div className="d-flex flex-row justify-content-center align-items-center">
          <img
            style={{ height: "296px", width: "313px" }}
            className=""
            src={slider1}
            alt="First slide"
          />
          <div className="">
            <h3 className="slider-title"> BIG SALE </h3>
            <p className="slider-text">  Sale 50% is ON .... GO NOW</p>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className="slider-background2" interval={2000}>
        <div className="d-flex flex-row justify-content-center align-items-center">
          <img
            style={{ height: "296px", width: "313px" }}
            className=""
            src={slider2}
            alt="First slide"
          />
          <div className="">
            <h3 className="slider-title">BIG SALE</h3>
            <p className="slider-text"> Sale 50% is ON .... GO NOW</p>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Silder1;
