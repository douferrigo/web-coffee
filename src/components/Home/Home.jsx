import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../Header/Header";
import './styles.css';

function Home(props) {
  const cafeCarrossel = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
  };

  return (
    <>
      <Header />
      <main>
        <Slider {...cafeCarrossel}>
          {props.homeList.map((item) => (
            <div className="cafehome-container" key={item.id}>
              <img src={item.img} alt={item.alt} />
              <h1 className="item-text">{item.text}</h1>
              <p className="item-description">{item.complement}</p>
              <button className="bannerbutton" type="">
                Veja mais
              </button>
            </div>
          ))}
        </Slider>
      </main>
    </>
  );
}

export default Home;