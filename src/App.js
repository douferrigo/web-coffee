import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import Home from "./components/Home/Home";
import MenuHome from "./components/MenuHome/MenuHome";
import Footer from "./components/Footer/Footer";
import ProductCard from "./components/ProductCard/ProductCard";
import InfoCard from "./components/Infocard/InfoCard";
import Cafe1 from "./img/Cafe1.png";
import Cafe2 from "./img/Cafe2.png";
import Arabe from "./img/Arabe.png";
import Creatina from "./img/Creatina.png";
import Cafeteria from "./img/Cafeteria.png";
import Pudim from "./img/Pudim.png";
import Especial from "./img/Especial.png";
import Tradicional from "./img/Tradicional.png";
import Kit from "./img/Kit.png";
import Club from "./img/Club.png";

const coffesList = [
  {
    id: 1,
    img: Cafe1,
    alt: "",
    price: "R$ 15,90",
    title: "Café Dev - 500ml",
    description: "Rapadura, floral, papaia, cítrico",
  },
  {
    id: 2,
    img: Cafe2,
    alt: "",
    price: "R$ 15,90",
    title: "Café Designer - 500ml",
    description: "Doce de leite, chocolate e nozes",
  },
];
const infoList = [
  {
    id: 1,
    img: Creatina,
    alt: "imagem 1",
    title: "Café corta o efeito da creatina? Entenda como tomar!",
    description:
      "Uma dúvida recorrente das pessoas que treinam e/ou fazem musculação é: Será que o café corta o efeito da ...",
    link: "Saiba mais",
  },
  {
    id: 2,
    img: Cafeteria,
    alt: "imagem 2",
    title: "Cardápio de cafeteria: Saiba como montar e o que oferecer!",
    description:
      "Abrir uma cafeteria é uma ótima oportunidade para aproveitar o alto potencial de lucratividade...",
    link: "Saiba mais!",
  },
  {
    id: 3,
    img: Pudim,
    alt: "imagem 3",
    title: "Como fazer pudim de café com ou sem forno: Aprenda aqui!",
    description:
      "Além de ser o queridinho do brasileiro no dia a dia, o café é um ingrediente muito versátil para diversas receitas doces...",
    link: "Saiba mais!",
  },
  {
    id: 4,
    img: Arabe,
    alt: "imagem 4",
    title: "Café Arábica: saiba o que é e quais as diferenças do grão",
    description:
      "Coffea arabica é uma espécie de café natural da Arábia ou da Etiópia, A espécie Coffea arabica produz cafés de qualidade, finos e requintados, e possui aroma intenso e os mais diversos sabores, com inúmeras variações de corpo e acidez. ",
    link: "Saiba mais!",
  },
];

const menuList = [
  {
    id: 1,
    img: Especial,
    alt: "Cafés especiais",
    title: "Especiais",
  },
  {
    id: 2,
    img: Tradicional,
    alt: "Cafés tradicionais",
    title: "Tradicionais",
  },
  {
    id: 3,
    img: Kit,
    alt: "Kits",
    title: "Kits",
  },
  {
    id: 4,
    img: Club,
    alt: "Wecoffee club",
    title: "WeCoffee Club+",
  },
];
const homeList = [
  { id:1,
    img: Cafe1,
    text: ".[Café Dev]; 500ml",
    complement: "com 10% OFF",
    alt: "Banner 1",
},
{
  id:2,
  img: Cafe2,
  text: "Café Designer - 500ml",
  complement: "Lançamento",
  alt: "Banner 2",
},
]
function App() {
  return (
    <div className="App">
      <Home homeList={homeList}/>
      <MenuHome menuList={menuList} />
      <ProductCard coffesList={coffesList} />
      <InfoCard infoList={infoList} />
      <Footer />
    </div>
  );
}

export default App;
