import {
  AddOns,
  BigSideBar,
  Buttons,
  PersonalInfo,
  SelectPlan,
  SmallButtons,
  SmallSideBar,
  Summary,
  ThankYou,
} from "@/components";

export default function Home() {
  return (
    <div className="min-h-screen w-screen bg-blue-50 flex flex-col items-center ">
      <SmallSideBar />
      <div className="flex flex-col justify-between sm:justify-center items-center flex-1">
        <div className="z-50 rounded-xl bg-white flex items-center justify-center m-4 p-4 h-fit pt-8 sm:hidden">
          <PersonalInfo />
          <SelectPlan />
          <AddOns />
          <Summary />
          <div className="pt-8 pb-16">
            <ThankYou />
          </div>
        </div>

        <div className="hidden sm:m-4 p-4 h-[600px] w-[640px] md:w-[750px] lg:w-[945px] bg-white shadow-2xl rounded-xl sm:flex items-start justify-between">
          <BigSideBar />
          <div className="flex items-center justify-between flex-col  w-full flex-1 h-full">
            <div className="mb-auto pt-6">
              <PersonalInfo />
              <SelectPlan />
              <AddOns />
              <Summary />
              <div className="w-full h-full pt-20 flex items-center justify-center">
                <ThankYou />
              </div>
            </div>
            <Buttons />
          </div>
        </div>

        <footer>
          <SmallButtons />
          <div className="my-1 sm:mt-4 flex justify-center items-center text-center">
            <span className="text-xs sm:text-sm text-neutral-700 font-normal text-center">
              Challenge by{" "}
              <a
                href="https://www.frontendmentor.io?ref=challenge"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-700 underline"
              >
                Frontend Mentor
              </a>
              . Coded by{" "}
              <a
                href="https://twitter.com/Sani_M_Alhassan"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-700 text-neutral-50 rounded-md p-[2px]"
              >
                KEEZY🚀✨💫
              </a>
              .
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}
