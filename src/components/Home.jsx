import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./Header/Header";
import MenuHome from "./MenuHome";
import Cafe1 from "../img/Cafe1.png";
import Cafe2 from "../img/Cafe2.png";

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
          <div className="cafehome">
            <img src={Cafe1} alt="Banner 1" />
            <button className="bannerbutton" type="">
              Veja mais
            </button>
          </div>
          <div className="cafehome">
            <img src={Cafe2} alt="Banner 2" />
            <button className="bannerbutton" type="">
              Veja mais
            </button>
          </div>
        </Slider>
        <MenuHome />
      </main>
    </>
  );
}
export default Home;
