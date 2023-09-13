import React, { useState, useEffect } from "react";
import ShopCartSvg from "../../svg/ShopCartSvg";
import WecodeSvg from "../../svg/WecodeSvg";
import { FaBars } from "react-icons/fa";
import LupaSvg from "../../svg/LupaSvg";
import AccountSvg from "../../svg/AccountSvg";
import Sidebar from "../Sidebar/Sidebar";
import { Container } from "./styles";
import styled from "styled-components";

function Header() {
  const [sidebar, setSidebar] = useState(false);
  const [headerTransparent, setHeaderTransparent] = useState(true); // Defina o estado inicial

  const showSidebar = () => setSidebar(!sidebar);

  useEffect(() => {
    const handleScroll = () => {
      // Verificar a posição de rolagem atual
      if (window.scrollY > 0) {
        // Se já houve um scroll, mantenha o cabeçalho preto
        setHeaderTransparent(false);
      }
    };

    // Adicionar ouvinte de evento para o evento de rolagem da janela
    window.addEventListener("scroll", handleScroll);

    // Remover o ouvinte de evento ao desmontar o componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container transparent={headerTransparent}>
      <header className="navbar active">
        <div className="left-icons">
          <FaBars onClick={showSidebar} />
          {sidebar && <Sidebar active={setSidebar} />}
          <LupaSvg />
        </div>
        <div className="central-icon">
          <WecodeSvg />
        </div>
        <div className="right-icons">
          <AccountSvg />
          <ShopCartSvg />
        </div>
      </header>
    </Container>
  );
}

export default Header;