import React, { useState } from "react";
import ShopCartSvg from "../svg/ShopCartSvg";
import WecodeSvg from "../svg/WecodeSvg";
import MenuSvg from "../svg/MenuSvg";
import LupaSvg from "../svg/LupaSvg";
import AccountSvg from "../svg/AccountSvg";
import Sidebar from "./Sidebar";

function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <header className="">
      <div className="left-icons">
        <MenuSvg onClick={toggleSidebar} />
        <LupaSvg />
      </div>
      <div className="central-icon">
        <WecodeSvg />
      </div>
      <div className="right-icons">
        <AccountSvg />
        <ShopCartSvg />
      </div>

      {sidebarOpen && <Sidebar closeSidebar={closeSidebar} />}
    </header>
  );
}

export default Header;
