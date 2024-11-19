import React from "react";
import map from "assets/images/map.jpg";

function SomaleBranch() {
  return (
    <div className="flex  max-md:flex-col w-[360px] mx-auto gap-x-12 gap-y-5 justify-center items-center">
      <img src={map} className="h-20 w-[123px]" alt="" />
      <div className="flex flex-col ">
        <h2 className="text-xl text-nowrap capitalize text-cardYellow font-bold mb-2">
          other country Branch
        </h2>

        <ul className="flex flex-col list-none max-md:items-center gap-2">
          <li className="text-sm font-cursive ">europe</li>
          <li className="text-sm">+252 111 111 111</li>
          <li className="text-sm">+252 111 111 111</li>
          <li className="text-sm">info@melabooks-som.com</li>
          <li className="text-sm">melabooks@gmail.com</li>
          <li className="text-sm">Cabaaye Bus Station, Downtown</li>
          <li className="text-sm">Hargeysa, Somaliland</li>
        </ul>
      </div>
    </div>
  );
}

export default SomaleBranch;
