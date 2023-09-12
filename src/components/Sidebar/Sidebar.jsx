import React from "react";
import MenuSvg from "../../svg/MenuSvg";
import SideMenu from "./SideMenu";
import { Container, Content } from "./styles";
import { FaTimes } from "react-icons/fa";

const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }
  return (
    <Container sidebar ={active}>
      <FaTimes onClick={closeSidebar} />
      <Content>
      <SideMenu />
      </Content>
    </Container>
  );
};

export default Sidebar;
