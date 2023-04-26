import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <section className="footer">
      <div className="footer__stone"></div>
      <p className="footer__text">До скорой встречи,</p>
      <div className="footer__names">
        <p className="footer__name">Maksim &</p>
        <p className="footer__name footer__name-end">Alyona</p>
      </div>
    </section>
  );
}

export default Footer;