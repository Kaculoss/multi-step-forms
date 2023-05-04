import { Plan, PricePlan } from "@/utilities/types";
import Image from "next/image";
import React from "react";

type Props = {
  icon: any;
  name: string;
  prices: PricePlan;
  discount: string;
  selected: boolean;
  yearly: boolean;
  setPlan: (plan: Plan) => void;
};

const Plan = ({
  icon,
  name,
  prices,
  discount,
  selected,
  yearly,
  setPlan,
}: Props) => {
  const handleClick = () => {
    setPlan({ name, prices });
  };

  return (
    <div
      className={`w-full md:h-40 md:w-[140px] rounded-xl border transition-all duration-500 p-4 flex md:flex-col justify-start gap-4 md:justify-between items-start cursor-pointer hover:border-indigo-700 hover:bg-blue-50 ${
        selected ? "border-indigo-700 bg-blue-50" : "border-slate-200"
      }`}
      onClick={handleClick}
    >
      <Image
        src={icon}
        alt={name}
        height={40}
        width={40}
        className="rounded-full"
      />

      <div className="flex flex-col items-start justify-end transition-all duration-500">
        <p className="font-keezy-bold text-sky-900">{name}</p>
        <p className="font-keezy-medium text-slate-400">
          ${yearly ? `${prices.yr}/yr` : `${prices.mo}/mo`}
        </p>
        <p className="font-keezy-regular text-sky-900 text-sm">
          {yearly && discount}
        </p>
      </div>
    </div>
  );
};

export default Plan;
