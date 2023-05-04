"use client";

import React from "react";
import { useWeb } from "@/utilities/WebContext";

const Buttons = () => {
  const {
    buttons,
    personal_info,
    select_plan,
    add_ons,
    summary,
    personal_email,
    personal_name,
    personal_number,
    selected_plan,
    selected_addons,
    setSlideFromNextTrue,
    setSlideFromNextFalse,
    setIsPersonalDataErrTrue,
    setIsPersonalDataErrFalse,
    nextToSelectPlan,
    backToPersonalInfo,
    setIsSelectedPlanErrTrue,
    setIsSelectedPlanErrFalse,
    nextToAddOns,
    backToSelectPlan,
    setIsAddOnsErrTrue,
    setIsAddOnsErrFalse,
    nextToSummary,
    backToAddOns,
    confirmToThankYou,
  } = useWeb();

  const handleNext = () => {
    if (personal_info) {
      if (
        personal_name.isErr ||
        personal_email.isErr ||
        personal_number.isErr
      ) {
        setIsPersonalDataErrTrue();
      } else {
        setIsPersonalDataErrFalse();
        setSlideFromNextTrue();
        nextToSelectPlan();
      }
    }

    if (select_plan) {
      if (selected_plan.name === "") {
        setIsSelectedPlanErrTrue();
      } else {
        setIsSelectedPlanErrFalse();
        setSlideFromNextTrue();
        nextToAddOns();
      }
    }

    if (add_ons) {
      if (selected_addons.length === 0) {
        setIsAddOnsErrTrue();
      } else {
        setIsAddOnsErrFalse();
        setSlideFromNextTrue();
        nextToSummary();
      }
    }

    if (summary) {
      setSlideFromNextTrue();
      confirmToThankYou();
    }
  };

  const handleBack = () => {
    if (select_plan) {
      backToPersonalInfo();
      setSlideFromNextFalse();
    }

    if (add_ons) {
      setSlideFromNextFalse();
      backToSelectPlan();
    }

    if (summary) {
      setSlideFromNextFalse();
      backToAddOns();
    }
  };

  if (!buttons) return null;

  return (
    <div className="hidden sm:block w-full max-w-[450px] transition-all duration-500">
      <div className="flex w-full items-center justify-between">
        <div
          className={`w-full text-left transition-all duration-500 ${
            !personal_info ? "block" : "hidden"
          }`}
        >
          <button
            type="button"
            className="bg-transparent text-slate-400 px-4 py-2 rounded-lg border-none hover:text-slate-500 font-keezy-regular text-base transition-all duration-500"
            onClick={handleBack}
          >
            Go Back
          </button>
        </div>
        <div className="w-full text-right">
          <button
            type="button"
            className={`px-4 py-2 rounded-lg  border-none hover:opacity-70 font-keezy-regular text-base transition-all duration-500 ${
              !summary
                ? "bg-blue-950 text-blue-50"
                : "bg-indigo-700 text-blue-50"
            }`}
            onClick={handleNext}
          >
            {!summary ? "Next Step" : "Confirm"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
