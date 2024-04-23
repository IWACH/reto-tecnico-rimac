'use client';
import React from "react";
import { usePathname } from "next/navigation";

const StepperWeb = () => {
  const pathname = usePathname();

  return (
    <div className="stepper-web">
      <div className="stepper-web-container">
        <div className="step-info">
          <div
            className={`step-item ${pathname === "/plans" && "step-active"}`}
          >
            <div className="step-number">1</div>
            <div className="step-description">Planes y coberturas</div>
          </div>
          <div
            className={`step-item ${pathname === "/summary" && "step-active"}`}
          >
            <div className="step-number">2</div>
            <div className="step-description">Resumen</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepperWeb;
