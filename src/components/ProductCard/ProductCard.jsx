import React, { useState } from "react";
import Slider from "react-slick";
import "./styles.css";
import ShopBagSvg from "../../svg/ShopBagSvg";
import StarSvg from "../../svg/StarSvg";
import Toastify from "toastify-js";

function ProductCard(props) {
  const [cartItemCount, setCartItemCount] = useState(0);

  const productCarrossel = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 8000,
  };

  const addToCart = () => {
    props.onAddToCart(props.product);
    setCartItemCount(cartItemCount + 1);
    showAlert();
  };

  function showAlert() {
    Toastify({
      text: "Produto adicionado ao carrinho",
      duration: 3000,
      newWindow: true,
      gravity: "top",
      position: "center",
      stopOnFocus: true,
      style: {
        background: "linear-gradient(to right, #4B0082, #8B008B)",
      },
      onClick1: function () {},
    }).showToast();
  }

  return (
    <div className="productbanner">
      <h2 className="section-title">Os favoritos da casa</h2>
      <p className="section-description">
        Conheça os cafés queridinhos da galera!
      </p>
      <Slider {...productCarrossel}>
        {props.coffesList.map((item) => (
          <div className="product-card" key={item.id}>
            <div className="product-image-container">
              <img src={item.img} alt="" className="product-image" />
              <button
                type="button"
                className="button_add_bag"
                onClick={addToCart}
              >
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
