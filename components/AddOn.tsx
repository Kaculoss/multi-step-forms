import { AddOn } from "@/utilities/types";
import { PricePlan } from "@/utilities/types";
import Image from "next/image";
import React from "react";
import CheckImg from "../assets/images/icon-checkmark.svg";

type Props = {
  id: number;
  name: string;
  prices: PricePlan;
  desc: string;
  selected: boolean;
  yearly: boolean;
  setAddOn: (addon: AddOn) => void;
};

const AddOn = ({
  id,
  name,
  prices,
  desc,
  selected,
  yearly,
  setAddOn,
}: Props) => {
  const handleClick = () => {
    setAddOn({ id, name, prices });
  };

  return (
    <div
      className={`w-full rounded-xl border transition-all duration-500 p-4 flex gap-4 justify-between items-center cursor-pointer hover:border-indigo-700 hover:bg-blue-50 ${
        selected ? "border-indigo-700 bg-blue-50" : "border-slate-200"
      }`}
      onClick={handleClick}
    >
      <div className="flex items-center justify-start gap-4">
        <div
          className={`flex items-center justify-center w-5 h-5 rounded-md border transition-all duration-500 ${
            selected ? "border-indigo-700 bg-indigo-700" : "border-slate-200"
          }`}
        >
          <Image
            src={CheckImg}
            alt={name}
            height={9}
            width={12}
            className={`${
              selected ? "block" : "hidden"
            } transition-all duration-500 `}
          />
        </div>

        <div className="flex flex-col items-start justify-center transition-all duration-500">
          <p className="font-keezy-bold text-sky-900">{name}</p>
          <p className="font-keezy-regular text-sm text-slate-400">{desc}</p>
        </div>
      </div>

      <p className="font-keezy-regular text-indigo-700">
        +${yearly ? `${prices.yr}/yr` : `${prices.mo}/mo`}
      </p>
    </div>
  );
};

export default AddOn;
