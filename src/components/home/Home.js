"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import TermsAndConditions from "./TermsAndConditions";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { getUsers, saveUserObject } from "@/lib/features/userSlice";

const Home = () => {
  const dispatch = useAppDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const [documentNumber, setDocumentNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [privacyPolicyAccepted, setPrivacyPolicyAccepted] = useState(false);
  const [
    commercialCommunicationsAccepted,
    setCommercialCommunicationsAccepted,
  ] = useState(false);
  const [formAttempted, setFormAttempted] = useState(false);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const { isLoading: userLoading, data: users } = useAppSelector(
    (state) => state.users
  );

  const handleClick = () => {
    setFormAttempted(true);
    if (
      documentNumber &&
      phoneNumber &&
      privacyPolicyAccepted &&
      commercialCommunicationsAccepted
    ) {
      const myObject = {
        dni: documentNumber,
        phone: phoneNumber,
      };
      dispatch(saveUserObject(myObject));
    }
  };

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main className="main">
      <div className="main-container grid">
        <div className="image-container">
          <Image
            src="/home-image.svg"
            alt="Home Image"
            layout="responsive"
            width={480}
            height={560}
          />
        </div>
        <div className="card-messages-container">
          <div className="card-message">Seguro Salud Flexible</div>
          <div className="card-title">Creado para ti y tu familia</div>
        </div>

        <div className="card-bottom">
          <div className="separator"></div>
          <div className="card-subtittle">
            Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
            asesoría. 100% online.
          </div>
          <div
            className={`input-group ${
              formAttempted && !documentNumber ? "error" : ""
            }`}
          >
            <div className="select-input">
              <select name="document-type" id="document-type">
                <option value="dni">DNI</option>
                <option value="ruc">RUC</option>
              </select>
              <input
                type="number"
                id="document-number"
                name="document-number"
                placeholder="Nro de documento"
                value={documentNumber}
                onChange={(e) => {
                  if (e.target.value.length <= 8) {
                    setDocumentNumber(e.target.value);
                  }
                }}
              />
            </div>
            {formAttempted && !documentNumber && (
              <p className="error-message">Ingresar información válida</p>
            )}
            <div
              className={`input-field ${
                formAttempted && !phoneNumber ? "error" : ""
              }`}
            >
              <input
                type="number"
                id="phone-number"
                name="phone-number"
                placeholder="Número de celular"
                value={phoneNumber}
                onChange={(e) => {
                  if (e.target.value.length <= 9) {
                    setPhoneNumber(e.target.value);
                  }
                }}
              />
            </div>
            {formAttempted && !phoneNumber && (
              <p className="error-message">Ingresar información válida</p>
            )}
          </div>
          <div className="checkbox-group">
            <div
              className={`checkbox-field ${
                formAttempted && !privacyPolicyAccepted ? "error" : ""
              }`}
            >
              <input
                type="checkbox"
                id="privacy-policy"
                name="privacy-policy"
                checked={privacyPolicyAccepted}
                onChange={(e) => setPrivacyPolicyAccepted(e.target.checked)}
              />
              <label htmlFor="privacy-policy">
                Acepto la Política de Privacidad
              </label>
            </div>
            <div
              className={`checkbox-field ${
                formAttempted && !commercialCommunicationsAccepted
                  ? "error"
                  : ""
              }`}
            >
              <input
                type="checkbox"
                id="commercial-communications"
                name="commercial-communications"
                checked={commercialCommunicationsAccepted}
                onChange={(e) =>
                  setCommercialCommunicationsAccepted(e.target.checked)
                }
              />
              <label htmlFor="commercial-communications">
                Acepto la Política de Comunicaciones Comerciales
              </label>
            </div>
          </div>
          <TermsAndConditions isOpen={isOpen} onClose={togglePopup} />
          <Link
            href={
              documentNumber &&
              phoneNumber &&
              privacyPolicyAccepted &&
              commercialCommunicationsAccepted
                ? "/plans"
                : "#"
            }
          >
            <button className="btn" onClick={handleClick}>
              Cotiza aquí
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Home;
