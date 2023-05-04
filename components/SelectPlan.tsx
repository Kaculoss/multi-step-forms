"use client";

import React from "react";
import { useWeb } from "@/utilities/WebContext";
import ArcadeImg from "../assets/images/icon-arcade.svg";
import AdvancedImg from "../assets/images/icon-advanced.svg";
import ProImg from "../assets/images/icon-pro.svg";
import Plan from "./Plan";

const SelectPlan = () => {
  const {
    slide_from_next,
    select_plan,
    isYearly,
    selected_plan,
    isSelectedPlanErr,
    setSelectedPlan,
    toggleIsYearly,
  } = useWeb();

  const availablePlan = [
    {
      name: "Arcade",
      prices: { mo: 9, yr: 90 },
      discount: "2 months free",
      icon: ArcadeImg,
    },
    {
      name: "Advanced",
      prices: { mo: 12, yr: 120 },
      discount: "2 months free",
      icon: AdvancedImg,
    },
    {
      name: "Pro",
      prices: { mo: 15, yr: 150 },
      discount: "2 months free",
      icon: ProImg,
    },
  ];

  return (
    <div
      className={`max-w-[450px] overflow-x-hidden ${
        !select_plan ? "hidden" : "block"
      }
      ${slide_from_next ? "animate-right-slide-in " : "animate-left-slide-in "}
        `}
    >
      <div className="mb-8">
        <h1 className="text-3xl text-blue-950 tracking-wide font-keezy-bold">
          Select your plan
        </h1>
        <p className="text-base text-slate-400 font-keezy-regular mb-8">
          You have the option of monthly or yearly billing.
        </p>
      </div>
      {selected_plan.name === "" && isSelectedPlanErr && (
        <p className="font-keezy-regular text-xs text-rose-600 text-right w-full pr-4">
          Please select an a plan
        </p>
      )}
      <div
        className={`w-full flex flex-col md:flex-row justify-between items-center gap-4 mb-6 ${
          selected_plan.name === "" &&
          isSelectedPlanErr &&
          "border-y border-rose-600 py-4 rounded-xl"
        } `}
      >
        {availablePlan.map((plan) => {
          const { name, prices, discount, icon } = plan;
          return (
            <Plan
              key={name}
              name={name}
              prices={prices}
              discount={discount}
              icon={icon}
              yearly={isYearly}
              setPlan={setSelectedPlan}
              selected={selected_plan.name === name}
            />
          );
        })}
      </div>
      <div className="w-full bg-blue-50 rounded-lg font-keezy-medium p-4 flex items-center justify-center gap-8">
        <p
          className={`${
            !isYearly ? "text-blue-950" : "text-slate-300"
          } transition-all duration-500`}
        >
          Monthly
        </p>
        <div
          className={`bg-blue-950 cursor-pointer w-14 h-7 p-1 rounded-full transition-all duration-500`}
          onClick={toggleIsYearly}
        >
          <div
            className={`w-2/5 h-full bg-white shadow-xl rounded-full transition-all duration-500 ${
              isYearly ? "ml-[29px]" : "ml-0"
            }`}
          ></div>
        </div>
        <p
          className={`${
            isYearly ? "text-blue-950" : "text-slate-300"
          } transition-all duration-500`}
        >
          Yearly
        </p>
      </div>
    </div>
  );
};

export default SelectPlan;
