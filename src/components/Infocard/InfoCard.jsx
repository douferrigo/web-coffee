import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";

function InfoCard(props) {
  const infoCarrossel = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
  };

  return (
    <div className="info-panel">
      <h1>Conheça mais!</h1>
      <p>Fique por dentro de tudo que acontece no universo cafeeiro</p>

      <Slider {...infoCarrossel}>
        {props.infoList.map((item, index) => (
          <div className="info-card" key={index}>
            <div className="info-image-container">
              <img src={item.img} alt={item.alt} className="info-image" />
            </div>
            <div className="info-details">
              <h3 className="info-title">{item.title}</h3>
              <p className="description">{item.description}</p>
              <a href="#" className="description">
                {item.link}
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default InfoCard;
