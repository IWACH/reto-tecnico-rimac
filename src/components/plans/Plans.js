"use client";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { getUsers } from "@/lib/features/userSlice";
import CardPlanInfo from "./CardPlanInfo";
import { getProducts } from "@/lib/features/productSlice";
import CardProduct from "./CardProduct";
import { map } from "lodash";

const Plans = () => {
  const dispatch = useAppDispatch();
  const [selectedPlan, setSelectedPlan] = useState(null);

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getProducts());
  }, [dispatch]);

  const {
    isLoading: userLoading,
    data: users,
    savedObject: infoClient,
  } = useAppSelector((state) => state.users);

  const { isLoading: productsLoading, data: products } = useAppSelector(
    (state) => state.products
  );

  const handleCheckboxChange = (planTitle) => {
    setSelectedPlan(planTitle);
  };

  const planInfo = [
    {
      title: "Para mí",
      icon: "/plans/select-for-me.svg",
      description:
        "Cotiza tu seguro de salud y agrega familiares si así lo deseas.",
    },
    {
      title: "Para alguien más",
      icon: "/plans/select-for-someone.svg",
      description:
        "Realiza una cotización para uno de tus familiares o cualquier persona.",
    },
  ];

  return (
    <div className="main">
      <div className="plans-container grid">
        <div className="plans-back">
          <i className="fa-solid fa-circle-chevron-left"></i>
          <span>Volver</span>
        </div>
        <div className="box-plan-title">
          <div className="plans-title">{`${users.name}, ¿Para quién deseas cotizar?`}</div>
          <div className="plans-subtitle">
            Selecciona la opción que se ajuste más a tus necesidades.
          </div>
        </div>

        <div className="plans-cards">
          {planInfo.map((plan, index) => (
            <CardPlanInfo
              key={index}
              title={plan.title}
              icon={plan.icon}
              description={plan.description}
              onCheckboxChange={() => handleCheckboxChange(index)}
              isSelected={selectedPlan === index}
            />
          ))}
        </div>
        <div className="box-products">
          {selectedPlan !== null && (
            <div>
              {products &&
                map(products, (product) => {
                  const price =
                    selectedPlan === 1 ? product.price * 0.95 : product.price;
                  return (
                    <CardProduct
                      description={product.description}
                      name={product.name}
                      price={price}
                      icon="/products/icon-product-1.svg"
                    />
                  );
                })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Plans;
