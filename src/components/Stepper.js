import Link from "next/link";
import React from "react";

const Stepper = () => {
  return (
    <div className="stepper">
      <div className="stepper-container">
        <Link href="/">
          <button className="back-button">
            <i className="fa-solid fa-circle-arrow-left"></i>
          </button>
        </Link>

        <div className="step-info">
          Paso <span className="current-step">1</span> de 2
        </div>
        <div className="progress-bar">
          <div className="progress"></div>
        </div>
      </div>
    </div>
  );
};

export default Stepper;
