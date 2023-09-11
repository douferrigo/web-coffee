import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function InfoCard(props) {
  const infoCarrossel = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
  };

  return (
    <div className="Info-panel">
      <h1>Conheça mais!</h1>
      <p>Fique por dentro de tudo que acontece no universo cafeeiro</p>
      <Slider {...infoCarrossel}>
        {props.infoList.map((item) => (
          <div className="info-card">
            <img src={item.img} alt={item.alt} className="info-image" />
            <div className="info-text">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href="#">{item.link}</a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default InfoCard;
