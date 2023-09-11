import React from "react";
import MenuSvg from "../svg/MenuSvg";
import SideMenu from "./SideMenu";

const Sidebar = ({ active, closeSidebar }) => {
  return (
    <div className="sidebar">
      <MenuSvg />
      <MenuSvg onClick={closeSidebar} />
      <SideMenu />
    </div>
  );
};

export default Sidebar;
