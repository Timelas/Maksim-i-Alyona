import React from "react";
import { useMediaQuery } from 'usehooks-ts';
import "./Header.css";
import newlyweds from "../../images/foto3.jpg"

function Header() {
  const resize = useMediaQuery('(min-width: 700px)');
  return (
    <section className="header" id="home">
      {
        resize ? (
          <div className="header__desctop">
            <div className="header__stone"></div>
            <div className="header__stone2"></div>
            <img src={newlyweds} className="header__image" alt="молодожены"></img>
            <div className="header__info">
              <p className="header__info_names">Maksim &</p>
              <p className="header__info_names">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Alyona</p>
              <h1 className="header__title">Приглашают вас на свадьбу!</h1>
              <p className="header__info_date">13/07/2023</p>
            </div>
          </div>
        ) : (
          <div className="header__mobile">
            <div className="header__stone"></div>
            <div className="header__info-mobile">
              <p className="header__info_names-mobile header__info_names-mobile1">Maksim & </p>
              <p className="header__info_names-mobile header__info_names-mobile2">Alyona</p>
            </div>
            <img src={newlyweds} className="header__image-mobile" alt="молодожены"></img>
            <p className="header__info_date-mobile">13/07/2023</p>
          </div>
        )
      }
    </section>
  );
}

export default Header;