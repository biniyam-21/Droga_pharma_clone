import React from "react";
import map from "assets/images/map.jpg";

function MainBranch() {
  return (
    <div className="flex  max-md:flex-col  w-[360px] mx-auto gap-x-12 gap-y-5 justify-center items-center">
      <img src={map} className="h-20 w-[123px]" alt="" />
      <div className="flex flex-col ">
        <h2 className="text-xl text-nowrap text-cardYellow capitalize font-bold mb-2">
          Main wholesale Branch
        </h2>

        <ul className="flex flex-col list-none max-md:items-center gap-2">
          <li className="text-sm font-cursive ">Addis Ababa,Ethiopia</li>
          <li className="text-sm">+25111 273 4554</li>
          <li className="text-sm">+251 91 366 7537</li>
          <li className="text-sm">info@melabooks.com</li>
          <li className="text-sm">melabooksa@gmail.com</li>
          <li className="text-sm">Rufael Subcity ,Paster Square </li>
        </ul>
      </div>
    </div>
  );
}

export default MainBranch;
