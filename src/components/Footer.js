import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container ">
        <div className="footer-left">
          <Image
            src="/logo-footer-mobil.svg"
            alt="Logo móvil"
            width={138}
            height={20}
            className="footer-img-mobil"
          />
          <Image
            src="/logo-footer-web.svg"
            alt="Logo web"
            width={85.39}
            height={42}
            className="footer-img-web"
          />
        </div>
        <div className="footer-right">© 2024 RIMAC Seguros y Reaseguros.</div>
      </div>
    </footer>
  );
};

export default Footer;
