"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import BigImage from "../assets/images/bg-sidebar-desktop.svg";
import { useWeb } from "@/utilities/WebContext";
import { BigStep } from "@/utilities/types";

const BigSideBar = () => {
  const { personal_info, select_plan, add_ons, summary, thank_you } = useWeb();
  const [allSteps, setAllSteps] = useState<BigStep[]>([
    { num: 1, step: "your info", isStep: true },
    { num: 2, step: "select plan", isStep: false },
    { num: 3, step: "add-ons", isStep: false },
    { num: 4, step: "summary", isStep: false },
  ]);

  useEffect(() => {
    setAllSteps([
      { num: 1, step: "your info", isStep: personal_info },
      { num: 2, step: "select plan", isStep: select_plan },
      { num: 3, step: "add-ons", isStep: add_ons },
      { num: 4, step: "summary", isStep: summary || thank_you },
    ]);
  }, [personal_info, select_plan, add_ons, summary, thank_you]);

  return (
    <div className="hidden sm:block relative h-full mr-4">
      <Image
        alt="sidebar background image"
        src={BigImage}
        width={274}
        height={568}
        decoding="async"
        className="rounded-lg h-full object-cover"
      />
      <div className=" absolute top-8 left-8">
        {allSteps.map((step) => (
          <div
            key={step.num}
            className="flex items-center justify-start gap-4 mb-8"
          >
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full border border-blue-200 text-sm font-keezy-bold transition-all duration-1000 ${
                step.isStep
                  ? "bg-blue-200 text-blue-950"
                  : "bg-transparent text-white"
              }`}
            >
              <p>{step.num}</p>
            </div>

            <div className="flex flex-col items-start ">
              <p className="text-sm text-gray-400 uppercase leading-tight font-keezy-medium">
                STEP {step.num}
              </p>
              <h3 className="text-sm text-blue-50 uppercase font-keezy-bold leading-tight">
                {step.step}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BigSideBar;
