import React from "react";
import "./InfoDate.css";

function InfoDate() {
  return (
    <section className="info-date">
      <div className="info-date__invitation">
        <p className="info-date__who">Дорогие</p>
        <p className="info-date__who">родные и друзья!</p>
        <p className="info-date__text"> Мы  будем  рады  разделить  с  Вами  радость  неповторимого  для нас  дня – дня  нашей  свадьбы! Приглашаем присоединиться  к нашему празднику и  украсить  его  своим  присутствием! </p>
      </div>
      <div className="info-date__stone"></div>
      <div className="info-date__place" id="place">
        <div className="info-date__check-in">
          <p className="info-date__what">Регистрация и банкет состоится</p>
        </div>
        <p className="info-date__day-week">Четверг</p>
        <div className="info-date__day">
          <p className="info-date__number">13</p>
          <div className="info-date__vertical-line"></div>
          <p className="info-date__number">07</p>
          <div className="info-date__vertical-line"></div>
          <p className="info-date__number">23</p>
        </div>
        <p className="info-date__time">Сбор гостей в 15.00</p>
        <div className="info-date__banquet">
          <p className="info-date__where">шатёр "Летний"<br /> Сестрорецк, Большая Купальная, 28</p>
        </div>
      </div>
    </section>
  );
}

export default InfoDate;