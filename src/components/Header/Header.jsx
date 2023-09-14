import React, { useState, useEffect } from "react";
import ShopCartSvg from "../../svg/ShopCartSvg";
import WecodeSvg from "../../svg/WecodeSvg";
import { FaBars } from "react-icons/fa";
import LupaSvg from "../../svg/LupaSvg";
import AccountSvg from "../../svg/AccountSvg";
import Sidebar from "../Sidebar/Sidebar";
import { Container } from "./styles";

function Header({ cartItemCount }) {
  const [sidebar, setSidebar] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsHeaderVisible(true);
      } else {
        setIsHeaderVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container>
      <header className={`navbar ${isHeaderVisible ? "active" : ""}`}>
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
          <button className="cart-button">
            <ShopCartSvg />
            <span className="cart-item-count">{cartItemCount}</span>
          </button>
        </div>
      </header>
    </Container>
  );
}

export default Header;
