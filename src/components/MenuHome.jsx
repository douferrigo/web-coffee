import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Especial from "../img/Especial.png";
import Tradicional from "../img/Tradicional.png";
import Kit from "../img/Kit.png";
import Club from "../img/Club.png";

function MenuHome(props) {
  const homeCarrossel = {
    dots: false,
    infinite: false,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
  };
  return (
    <Slider {...homeCarrossel}>
      <div className="img-menu">
        <div className="img-container">
          <img src={Especial} alt="Cafés especiais" />
        </div>
        <p>Especiais</p>
      </div>
      <div className="img-menu">
        <div className="img-container">
          <img src={Tradicional} alt="Cafés tradicionais" />
        </div>
        <p>Tradicionais</p>
      </div>
      <div className="img-menu">
        <div className="img-container">
          <img src={Kit} alt="Kits" />
        </div>
        <p>Kits</p>
      </div>
      <div className="img-menu">
        <div className="img-container">
          <img src={Club} alt="Wecoffee club" />
        </div>
        <p>Wecoffee Club +</p>
      </div>
    </Slider>
  );
}
export default MenuHome;
