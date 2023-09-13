import React from "react";
import Jogador from "../../img/Jogador.png"
import "./styles.css"
function SideMenu(props) {
  return (
    <nav>
      <div className="container-img">
        <img src={Jogador} alt="Garoto jogando"/>
        <h1 >Café Gamer</h1>
        <p>Perfeito para aquela madrugada de lançamento de jogo novo</p>
      </div>
      <ul className="submenu-itens">
        <li>
          <a href="#" className="submenu-title">Cafés especiais</a>
          <ul className="submenu">
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
          <a href="#" className="submenu-title">Cafés Tradicionais</a>
          <ul className="submenu">
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
          <a href="#" className="submenu-title">Kits</a>
        </li>
        <li>
        <a href="#" className="submenu-club">Wecoffe Club +</a>
        </li>
      </ul>       
    </nav>
  );
}
export default SideMenu;
