"use client";
import React from "react";
import Image from "next/image";

const CardPlanInfo = ({
  title,
  icon,
  description,
  onCheckboxChange,
  isSelected,
}) => {
  const handleCheckboxChange = () => {
    onCheckboxChange(title);
  };

  return (
    <div className="content-card" onClick={handleCheckboxChange}>
      <label className="checkbox-card">
        <input type="checkbox" checked={isSelected} readOnly />
        <i className="fa-solid fa-check"></i>
      </label>
      <div className="box-icon-title">
        <div className="icon-card">
          <Image src={icon} alt="Logo Rimac" width={73.19} height={36} />
        </div>
        <div className="title-card">{title}</div>
      </div>

      <div className="description-card">{description}</div>
    </div>
  );
};

export default CardPlanInfo;
