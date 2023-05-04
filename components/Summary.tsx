"use client";

import React, { useEffect, useState } from "react";
import { useWeb } from "@/utilities/WebContext";

const Summary = () => {
  const {
    slide_from_next,
    summary,
    isYearly,
    selected_plan,
    selected_addons,
    backToSelectPlan,
  } = useWeb();
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    let totalPrice = selected_addons.reduce(
      (total, addon) => {
        return (total += isYearly ? addon.prices.yr : addon.prices.mo);
      },
      isYearly ? selected_plan.prices.yr : selected_plan.prices.mo
    );

    setTotal(totalPrice);
  }, [selected_plan, selected_addons, isYearly]);

  return (
    <div
      className={`max-w-[450px] full md:w-[450px] overflow-x-hidden ${
        !summary ? "hidden" : "block"
      }
      ${slide_from_next ? "animate-right-slide-in " : "animate-left-slide-in "}
        `}
    >
      <div className="mb-8">
        <h1 className="text-3xl text-blue-950 tracking-wide font-keezy-bold">
          Finishing up
        </h1>
        <p className="text-base text-slate-400 font-keezy-regular mb-8">
          Double-check if everything looks OK before confirming.
        </p>
      </div>
      <div
        className={`w-full flex flex-col justify-center items-center gap-4 mb-6 p-4 rounded-xl bg-blue-50`}
      >
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col items-start justify-center">
            <p className="font-keezy-bold text-sky-900">
              {`${selected_plan.name} (${isYearly ? "Yearly" : "Monthly"})`}
            </p>
            <button
              type="button"
              className="underline font-keezy-regular text-slate-500"
              onClick={backToSelectPlan}
            >
              Change
            </button>
          </div>
          <p className="font-keezy-bold text-sky-900">
            $
            {isYearly
              ? `${selected_plan.prices.yr}/yr`
              : `${selected_plan.prices.mo}/mo`}
          </p>
        </div>

        <div className="h-px w-full bg-slate-300 rounded-full"></div>

        <div className="flex w-full flex-col gap-4 justify-center items-center">
          {selected_addons
            .sort((a, b) => a.id - b.id)
            .map((addon) => {
              const { name, prices, id } = addon;
              return (
                <div
                  key={id}
                  className="flex w-full justify-between items-center"
                >
                  <p className="font-keezy-regular text-sm text-slate-400">
                    {name}
                  </p>
                  <p className="font-keezy-regular text-sm text-sky-900">
                    +$
                    {isYearly ? `${prices.yr}/yr` : `${prices.mo}/mo`}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
      <div className="flex w-full justify-between items-center px-4">
        <p className="font-keezy-regular text-slate-400">{`Total (per ${
          isYearly ? "year" : "month"
        })`}</p>
        <p className="font-keezy-bold text-lg text-indigo-700">
          ${isYearly ? `${total}/yr` : `${total}/mo`}
        </p>
      </div>
    </div>
  );
};

export default Summary;
