import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import Home from "./components/Home";

import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import InfoCard from "./components/InfoCard";
import Cafe1 from "./img/Cafe1.png";
import Cafe2 from "./img/Cafe2.png";
import Arabe from "./img/Arabe.png";
import Creatina from "./img/Creatina.png";
import Cafeteria from "./img/Cafeteria.png";
import Pudim from "./img/Pudim.png";

const coffesList = [
  {
    id: 1,
    img: Cafe1,
    alt: "",
    price: "R$ 15,90",
    title: "Café Dev",
    description: "Rapadura, floral, papaia, cítrico",
  },
  {
    id: 2,
    img: Cafe2,
    alt: "",
    price: "R$ 15,90",
    title: "Café Designer",
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
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod minus exercitationem perferendis fugiat dolore sint unde, possimus, assumenda sit iusto ex magnam! Minus non ipsum eveniet exercitationem aliquam suscipit sunt.",
    link: "Saiba mais!",
  },
];

function App() {
  return (
    <div className="App">
      <Home />
      <ProductCard coffesList={coffesList} />
      <InfoCard infoList={infoList} />
      <Footer />
    </div>
  );
}

export default App;
