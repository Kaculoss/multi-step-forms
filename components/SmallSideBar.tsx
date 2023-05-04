"use client";

import { useWeb } from "@/utilities/WebContext";
import { SmallStep } from "@/utilities/types";
import Image from "next/image";
import SmallImage from "../assets/images/bg-sidebar-mobile.svg";
import React, { useEffect, useState } from "react";

const SmallSideBar = () => {
  const { personal_info, select_plan, add_ons, summary, thank_you } = useWeb();
  const [allSteps, setAllSteps] = useState<SmallStep[]>([
    { num: 1, isStep: true },
    { num: 2, isStep: false },
    { num: 3, isStep: false },
    { num: 4, isStep: false },
  ]);

  useEffect(() => {
    setAllSteps([
      { num: 1, isStep: personal_info },
      { num: 2, isStep: select_plan },
      { num: 3, isStep: add_ons },
      { num: 4, isStep: summary || thank_you },
    ]);
  }, [personal_info, select_plan, add_ons, summary, thank_you]);

  return (
    <div className="sm:hidden relative w-full flex justify-center items-center -mb-28">
      <Image
        alt="sidebar background image"
        src={SmallImage}
        width={375}
        height={172}
        decoding="async"
        className="w-full"
      />
      <div className=" absolute top-8 ">
        <div className="flex items-center gap-4">
          {allSteps.map((step) => (
            <div
              key={step.num}
              className={`w-8 h-8 flex items-center justify-center rounded-full border border-blue-200 text-sm font-keezy-bold transition-all duration-1000 ${
                step.isStep
                  ? "bg-blue-200 text-blue-950"
                  : "bg-transparent text-white"
              }`}
            >
              <p>{step.num}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SmallSideBar;
