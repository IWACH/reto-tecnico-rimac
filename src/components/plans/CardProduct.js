"use client";
import React from "react";
import Image from "next/image";
import { map } from "lodash";

const CardProduct = ({ name, icon, price, description, discount }) => {
  return (
    <div className="plan-card-container">
      <div className="medical-plan-card">
        <div className="box-title-icon">
          <div className="plan-title">{name}</div>
          <div className="icon-card">
            <Image src={icon} alt="Logo Rimac" width={73.19} height={36} />
          </div>
        </div>
        <div className="box-price">
          <div className="plan-cost-title">COSTO DEL PLAN:</div>
          {discount ? <div className="plan-cost-discount">{`$${price} antes`}</div> : null}
          <div className="plan-cost">{`$${
            discount ? price * 0.95 : price
          } al mes `}</div>
        </div>

        <hr />

        <div className="plan-benefits">
          <ul>
            {description &&
              map(description, (benefit) => {
                return <li>{benefit}</li>;
              })}
          </ul>
        </div>
        <button className="select-plan-button">Seleccionar Plan</button>
      </div>
    </div>
  );
};

export default CardProduct;
