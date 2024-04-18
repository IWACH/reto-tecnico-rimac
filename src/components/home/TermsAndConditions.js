"use client";
import React, { useState } from "react";

const TermsAndConditions = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="terms-conditions" onClick={togglePopup}>
        Aplican Términos y Condiciones.
      </div>
      {isOpen && (
        <div className="popup">
          <div className="popup-header">
            <i onClick={togglePopup} className="fa-solid fa-chevron-left"></i>
            <h2>Aplican Términos y Condiciones</h2>
          </div>
          <hr />
          <div className="popup-content">
            <p>
              Encontrarás información importante sobre tus derechos y
              obligaciones al utilizar nuestros servicios. Cubren aspectos clave
              como la privacidad, la seguridad y la conducta esperada. Te
              recomendamos encarecidamente familiarizarte con estos términos
              para estar bien informado.
            </p>
            <p>
              Si tienes preguntas o inquietudes sobre los &apos;Términos y
              Condiciones&apos;, no dudes en ponerte en contacto con nuestro
              equipo de soporte. Estamos aquí para ayudarte y garantizar que tu
              experiencia sea transparente y segura.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default TermsAndConditions;
