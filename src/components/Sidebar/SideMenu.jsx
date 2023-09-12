import React from "react";
function SideMenu(props) {
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
export default SideMenu;
