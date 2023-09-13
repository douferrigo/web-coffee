import React from "react";
import Slider from "react-slick";
import "./styles.css";
import ShopBagSvg from "../../svg/ShopBagSvg";
import StarSvg from "../../svg/StarSvg";

function ProductCard(props) {
  const productCarrossel = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 8000,
  };
  return (
    <div className="productbanner">
      <h2 className="section-title">Os favoritos da casa</h2>
      <p className="section-description">
        Conheça os cafés queridinhos da galera!
      </p>
      <Slider {...productCarrossel}>
        {props.coffesList.map((item) => (
          <div className="product-card">
            <div className="product-image-container">
              <img src={item.img} alt="" className="product-image" />
              <button type="button" className="button_add_bag">
                <ShopBagSvg />
              </button>
              <button type="button" className="button_add_star">
                <StarSvg />
              </button>
            </div>
            <div className="product-info">
              <h2 className="card_title">{item.title}</h2>
              <p className="card-description">{item.description}</p>
              <h2 className="card_price">{item.price}</h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
export default ProductCard;
