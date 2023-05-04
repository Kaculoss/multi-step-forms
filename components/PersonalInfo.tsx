"use client";

import { useWeb } from "@/utilities/WebContext";
import React from "react";

const PersonalInfo = () => {
  const {
    slide_from_next,
    personal_info,
    personal_name,
    personal_email,
    personal_number,
    isPersonalDataErr,
    setPersonalName,
    setPersonalEmail,
    setPersonalNumber,
  } = useWeb();

  // if (!personal_info) return null;

  return (
    <div
      className={`max-w-[450px] overflow-x-hidden ${
        !personal_info ? "hidden" : "block"
      } ${
        slide_from_next ? "animate-right-slide-in" : "animate-left-slide-in"
      }`}
    >
      <div className="mb-8">
        <h1 className="text-3xl text-blue-950 tracking-wide font-keezy-bold">
          Personal info
        </h1>
        <p className="text-base text-slate-400 font-keezy-regular">
          Please provide your name, email address, and phone number.
        </p>
      </div>
      <form className="w-full">
        <div className="flex flex-col gap-1 items-start w-full mb-4">
          <div className="flex justify-between items-center w-full transition-all duration-500">
            <label
              htmlFor="name"
              className="text-base text-sky-950 font-keezy-regular "
            >
              Name
            </label>
            {personal_name.isErr && isPersonalDataErr && (
              <p className="font-keezy-medium text-rose-600 text-sm">
                {personal_name.ErrMsg}
              </p>
            )}
          </div>
          <input
            type="text"
            placeholder="e.g. Stephen King"
            id="name"
            name="name"
            value={personal_name.item}
            onChange={setPersonalName}
            className={`text-base text-sky-900 p-2 font-keezy-medium w-full border rounded-lg focus:outline-0 transition-all duration-500 ${
              personal_name.isErr && isPersonalDataErr
                ? "border-rose-600"
                : "border-slate-200 focus:border-indigo-700"
            }`}
          />
        </div>
        <div className="flex flex-col gap-1 items-start w-full mb-4">
          <div className="flex justify-between items-center w-full transition-all duration-500">
            <label
              htmlFor="email"
              className="text-base text-sky-950 font-keezy-regular "
            >
              Email
            </label>
            {personal_email.isErr && isPersonalDataErr && (
              <p className="font-keezy-medium text-rose-600 text-sm">
                {personal_email.ErrMsg}
              </p>
            )}
          </div>
          <input
            type="email"
            placeholder="e.g. stephenking@lorem.com"
            id="email"
            name="email"
            value={personal_email.item}
            onChange={setPersonalEmail}
            className={`text-base text-sky-900 p-2 font-keezy-medium w-full border rounded-lg focus:outline-0 transition-all duration-500 ${
              personal_email.isErr && isPersonalDataErr
                ? "border-rose-600"
                : "border-slate-200 focus:border-indigo-700"
            }`}
          />
        </div>
        <div className="flex flex-col gap-1 items-start w-full mb-4">
          <div className="flex justify-between items-center w-full transition-all duration-500">
            <label
              htmlFor="tel"
              className="text-base text-sky-950 font-keezy-regular "
            >
              Phone Number
            </label>
            {personal_number.isErr && isPersonalDataErr && (
              <p className="font-keezy-medium text-rose-600 text-sm">
                {personal_number.ErrMsg}
              </p>
            )}
          </div>
          <input
            type="tel"
            placeholder="e.g. +1 234 567 890"
            id="tel"
            name="tel"
            value={personal_number.item}
            onChange={setPersonalNumber}
            className={`text-base text-sky-900 p-2 font-keezy-medium w-full border rounded-lg focus:outline-0 transition-all duration-500 ${
              personal_number.isErr && isPersonalDataErr
                ? "border-rose-600"
                : "border-slate-200 focus:border-indigo-700"
            }`}
          />
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
