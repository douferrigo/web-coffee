import React from "react";
import InstagramSvg from "../../svg/InstagramSvg";
import FacebookSvg from "../../svg/FacebookSvg";
import TwitterSvg from "../../svg/TwitterSvg";
import TiktokSvg from "../../svg/TiktokSvg";
import PinterestSvg from "../../svg/PinterestSvg";
import "./styles.css";
import WecodeSvg from "../../svg/WecodeSvg";

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section wecode-svg-container">
          <WecodeSvg/>
        </div>
        <div className="footer-section auth-container"> 
        <p>&copy; 2023 Wecode Tecnologia para e-commerce Ltda. Todos os direitos reservados.</p>
        </div>
        <div className="footer-section title-container">
          <h3>Conecte-se Conosco</h3>
          <ul className="svg-container">
            <li className="footer-section svg-item">
              <InstagramSvg/>
            </li>
            <li className="footer-section svg-item">
              <FacebookSvg/>
            </li>
            <li className="footer-section svg-item">
              <PinterestSvg/>
            </li>
            <li className="footer-section svg-item">
              <TwitterSvg/>
            </li>
            <li className="footer-section svg-item">
              <TiktokSvg/>
            </li>
          </ul>
          <div className="footer-section title-container">
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
        <div className="footer-section title-container">
          <h3>Contato</h3>
          <ul className="subMenu">
            <li>
              <a href="mailto:ola@wecode.digital">ola@wecode.digital</a>
            </li>
            <li>
              <a href="tel:+5554999915546">+55 (54) 99991-5546</a>
            </li>
          </ul>
        </div>
        <div className="footer-section title-container">
          <h3>Endereço</h3>
          <ul className="subMenu">
            <li>
              <a href="#">bla bla bla ali</a>
            </li>
          </ul>
        </div>
        <div className="footer-section title-container">
          <h3>Políticas</h3>
          <ul className="subMenu">
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
export default Footer;
