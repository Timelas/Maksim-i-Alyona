import React from "react";
import Title from "../Title/Title";
import "./Details.css";

function Details() {
  return (
    <section className="details" id="details">
      <Title title={"Детали"}/>
      <div className="details__stone"></div>
      <div className="details__stone2"></div>
      <p className="details__text">Обратите внимание, что формат мероприятия не предполагают детской площадки и аниматоров. Пожалуйста, позаботьтесь о том, чтобы провести этот вечер без детей.</p>
      <div className="details__line"></div>
      <p className="details__text">От всего сердца просим вас воздержаться от использования в шатре и на близлежащей территории конфетти, бумфетти, хлопушек, а также кидать монеты, рис и бить бокалы.</p>
      <div className="details__line"></div>
      <p className="details__text">Убедительня просьба не курить в помещении шатра, в том числе и электронные сигареты.</p>
    </section>
  );
}

export default Details;