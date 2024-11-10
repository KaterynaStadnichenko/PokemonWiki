import Input from "../Input/Input";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import  backgr1  from "./app_background.gif";
import  backgr2  from "./app_back_2.gif";
import  backgr3  from "./app_back_3.gif";
import  backgr4  from "./app_back_4.gif";
import  backgr5  from "./app_back_5.gif";
import  backgr6  from "./app_back_6.gif";


console.log(backgr1);
console.log(backgr2);
console.log(backgr3);
console.log(backgr4);
console.log(backgr5);
console.log(backgr6);


function Hero() {
  const settings = {
    className: "",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true
  };

  return (
    <div className="slider-container">
      
      <Slider {...settings}>
        <div>
          <img src={backgr1} className="backgr"></img>
        </div>
        <div>
        <img src={backgr2} className="backgr"></img>
        </div>
        <div>
        <img src={backgr3} className="backgr"></img>
        </div>
        <div>
        <img src={backgr4} className="backgr"></img>
        </div>
        <div>
        <img src={backgr5} className="backgr"></img>
        </div>
        <div>
        <img src={backgr6} className="backgr"></img>
        </div>
      </Slider>
      <Input />
    </div>
  );
}

export default Hero;