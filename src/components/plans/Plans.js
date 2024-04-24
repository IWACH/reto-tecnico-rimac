"use client";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { getUsers } from "@/lib/features/userSlice";
import CardPlanInfo from "./CardPlanInfo";
import { getProducts } from "@/lib/features/productSlice";
import CardProduct from "./CardProduct";
import { map, filter } from "lodash";
import dayjs from "dayjs";

const Plans = () => {
  const dispatch = useAppDispatch();
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    if (!userLoading && users) {
      setLoading(false);
    }
  }, [userLoading, users]);

  const handleCheckboxChange = (planTitle) => {
    setSelectedPlan(planTitle);
  };

  function calculateAge(birthdate) {
    const dob = dayjs(birthdate, "DD-MM-YYYY");
    const age = dayjs().diff(dob, "year");

    return age;
  }

  const userAge = calculateAge(users?.birthDay);

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

  if (userLoading || loading) {
    return (
      <div className="main">
        <div className="plans-container grid">
          <div className="plans-back">
            <i className="fa-solid fa-circle-chevron-left"></i>
            <span>Volver</span>
          </div>
          <div className="box-plan-title">
            <div className="plans-title">Cargando...</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="main">
      <div className="plans-container grid">
        <div className="plans-back">
          <i className="fa-solid fa-circle-chevron-left"></i>
          <span>Volver</span>
        </div>
        <div className="box-plan-title">
          <div className="plans-title">{`${users?.name}, ¿Para quién deseas cotizar?`}</div>
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

        {selectedPlan !== null && (
          <div className="box-products">
            {products &&
              map(
                filter(products, (product) => product.age >= userAge),
                (product) => {
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
                }
              )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Plans;
