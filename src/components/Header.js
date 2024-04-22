import React from "react";
import Image from "next/image";
const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Image
          src="/rimac-logo.svg"
          alt="Logo Rimac"
          width={73.19}
          height={36}
        />
        <div className="header-right">
          <div className="header-text">¡Compra por este medio!</div>
          <div className="header-phone">
            <i className="fa-solid fa-phone"></i>
            <span>(01) 411 6001</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
