import React, { useState } from "react";
import ShopCartSvg from "../../svg/ShopCartSvg";
import WecodeSvg from "../../svg/WecodeSvg";
import {FaBars} from 'react-icons/fa';
import LupaSvg from "../../svg/LupaSvg";
import AccountSvg from "../../svg/AccountSvg";
import Sidebar from "../Sidebar/Sidebar";
import { Container } from './styles';
const Header = () => {
  const [sidebar, setSidebar] = useState (false)

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <Container>
      <header>
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
