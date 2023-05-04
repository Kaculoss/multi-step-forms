"use client";

import React from "react";
import { useWeb } from "@/utilities/WebContext";
import Image from "next/image";
import thankYouImg from "../assets/images/icon-thank-you.svg";

const ThankYou = () => {
  const { slide_from_next, thank_you } = useWeb();

  return (
    <div
      className={`max-w-[480px] overflow-x-hidden w-full h-full items-center justify-center ${
        !thank_you ? "hidden" : "flex"
      } ${
        slide_from_next
          ? "animate-right-slide-in animate-left-slide-out"
          : "animate-left-slide-in animate-right-slide-out"
      }`}
    >
      <div className="flex flex-col gap-4 justify-center items-center p-4">
        <Image
          alt="thank you"
          src={thankYouImg}
          height={80}
          width={80}
          className="rounded-full mb-2"
        />

        <h1 className="text-3xl text-blue-950 tracking-wide font-keezy-bold">
          Thank you!
        </h1>

        <p className="text-base text-slate-400 font-keezy-regular text-center">
          Thanks for comfirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
};

export default ThankYou;
