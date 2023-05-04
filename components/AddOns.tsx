"use client";

import React from "react";
import { useWeb } from "@/utilities/WebContext";
import AddOn from "./AddOn";

const AddOns = () => {
  const {
    slide_from_next,
    add_ons,
    selected_addons,
    isAddOnsErr,
    isYearly,
    setSelectedAddon,
  } = useWeb();

  const addOns = [
    {
      id: 1,
      name: "Online service",
      prices: { mo: 1, yr: 10 },
      desc: "Access to multiplayer games",
    },
    {
      id: 2,
      name: "Larger storage",
      prices: { mo: 2, yr: 20 },
      desc: "Extra 1TB of cloud save",
    },
    {
      id: 3,
      name: "Customizable profile",
      prices: { mo: 2, yr: 20 },
      desc: "Custom theme on your profile",
    },
  ];

  return (
    <div
      className={`max-w-[450px] full md:w-[450px] overflow-x-hidden ${
        !add_ons ? "hidden" : "block"
      }
      ${slide_from_next ? "animate-right-slide-in " : "animate-left-slide-in "}
        `}
    >
      <div className="mb-8">
        <h1 className="text-3xl text-blue-950 tracking-wide font-keezy-bold">
          Pick add-ons
        </h1>
        <p className="text-base text-slate-400 font-keezy-regular mb-8">
          Add-ons help enhance your gaming experience.
        </p>
      </div>
      {selected_addons.length === 0 && isAddOnsErr && (
        <p className="font-keezy-regular text-xs text-rose-600 text-right w-full pr-4">
          Please select at least one add-on
        </p>
      )}
      <div
        className={`w-full flex flex-col justify-center items-center gap-4 mb-6 ${
          selected_addons.length === 0 &&
          isAddOnsErr &&
          "border-y border-rose-600 py-4 rounded-xl"
        } `}
      >
        {addOns.map((addon) => {
          const { name, prices, desc, id } = addon;
          return (
            <AddOn
              key={id}
              name={name}
              prices={prices}
              desc={desc}
              id={id}
              yearly={isYearly}
              setAddOn={setSelectedAddon}
              selected={
                selected_addons.find((addon) => addon.id === id) ? true : false
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default AddOns;
