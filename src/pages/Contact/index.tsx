import React from "react";
import ContactCard from "./Components/ContactCard";
import packings_pills from "assets/images/packings_pills.jpg";
import AddisBranch from "Helper/AddisBranch";
import SomaleBranch from "Helper/SomaleBranch";
import MainBranch from "Helper/MainBranch";

export default function index() {
  return (
    <div
      className="w-full min-h-screen px-10 bg-cover bg-black bg-opacity-30 bg-center bg-no-repeat pb-9 h-auto flex flex-col justify-center items-center mx-auto border-b-cardYellow border-b-2 z-10"
      style={{
        backgroundImage: `url(${packings_pills})`,
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 bottom-0 bg-yellow-500 opacity-30 -z-[1]"
        style={{ zIndex: -1 }}
      ></div>
      <div className="flex max-1000:flex-col  w-max-[1512px] justify-center items-center pb-5 gap-x-20">
        <div className="flex flex-wrap  md:max-1000:w-[850px]  justify-items-center max-w-[780px] mx-auto mt-5 md:mt-10 gap-x-10 gap-y-5  text-white">
          <AddisBranch />

          <SomaleBranch />
          <MainBranch />
        </div>
        <div className="max-w-max mx-auto pt-5">
          <ContactCard />
        </div>
      </div>
    </div>
  );
}
