import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cafe1 from "./IMGS/Cafe1.png";
import Cafe2 from "./IMGS/Cafe2.png";
import Especial from "./IMGS/Especial.png";
import Kit from "./IMGS/Kit.png";
import Tradicional from "./IMGS/Tradicional.png";
import fetchProducts from "./Api/fetchProducts.js";

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
          <div>
            <img src={Cafe1} alt="Banner 1" />
          </div>
          <div>
            <img src={Cafe2} alt="Banner 2" />
          </div>
        </Slider>
        <MenuHome />
      </main>
    </>
  );
}
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
      <div>
        <img src={Especial} alt="Cafés especiais" />
        <p>especiais</p>
      </div>
      <div>
        <img src={Tradicional} alt="Cafés tradicionais" />
        <p>Tradicionais</p>
      </div>
      <div>
        <img src={Kit} alt="Kits" />
        <p>Kits</p>
      </div>
    </Slider>
  );
}
function Menu(props) {
  return (
    <nav>
      <h1>Café Gamer</h1>
      <p>Perfeito para aquela madrugada de lançamento de jogo novo</p>
      <ul>
        <li>
          <a href="#">Cafés especiais</a>
          <ul className="subMenu">
            <li>
              <a href="#">Café Cyborg</a>
            </li>
            <li>
              <a href="#">Café Stars Wars</a>
            </li>
            <li>
              <a href="#">Café Dark Elf</a>
            </li>
            <li>
              <a href="#">Ver todos</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Cafés Tradicionais</a>
          <ul className="subMenu">
            <li>
              <a href="#">Café Expresso</a>
            </li>
            <li>
              <a href="#">Café Americano</a>
            </li>
            <li>
              <a href="#">Cappuccino</a>
            </li>
            <li>
              <a href="#">Ver todos</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Kits</a>
        </li>
      </ul>
      <p>
        <a href="#">Wecoffe Club +</a>
      </p>
    </nav>
  );
}
function Products(props) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts("iphone").then((response) => {
      setProducts(response);
    });
  }, []);
  return (
    <section className="products container">
      <ProductCard />
    </section>
  );
}
function ProductCard() {
  return (
    <section className="product-card">
      <img src="" alt="" className="" />
      <div className="card_infos">
        <h2 className="card_price">R$ 15,00</h2>
        <h2 className="card_title">Café</h2>
      </div>
      <button type="button" className="button_add_cart">
        +
      </button>
    </section>
  );
}
function Header(props) {
  return (
    <header>
      <div className="left-icons"></div>
    </header>
  );
}
function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h3>
            &copy; 2023 Wecode Tecnologia para e-commerce Ltda. Todos os
            direitos reservados.
          </h3>
        </div>
        <div className="footer-section">
          <h3>Conecte-se Conosco</h3>
          <div className="footer-section">
            <h3>Sobre a empresa</h3>
            <ul className="subMenu">
              <li>
                <a href="#">Quem somos</a>
              </li>
              <li>
                <a href="#">Fale conosco</a>
              </li>
              <li>
                <a href="#">Produção nacional de café</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-section">
          <h3>Contato</h3>
          <ul>
            <li>
              <a href="mailto:ola@wecode.digital">ola@wecode.digital</a>
            </li>
            <li>
              <a href="tel:+5554999915546">+55 (54) 99991-5546</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Endereço</h3>
          <ul>
            <li>
              <a href="#">bla bla bla ali</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Políticas</h3>
          <ul>
            <li>
              <a href="#">Política de uso</a>
            </li>
            <li>
              <a href="#">Política de uso de cupom e desconto</a>
            </li>
            <li>
              <a href="#">Políticas de entrega</a>
            </li>
            <li>
              <a href="#">Termos de uso</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
function App() {
  return (
    <div className="App">
      <Home />
      <Products />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
