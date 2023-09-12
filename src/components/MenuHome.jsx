import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
      {props.menuList.map((item)=>(
        <div className="img-menu">
        <div className="img-container">
          <img src={item.img} alt={item.alt} />
        </div>
        <p>{item.title}</p>
      </div>
      ))}
    </Slider>
  );
}
export default MenuHome;
