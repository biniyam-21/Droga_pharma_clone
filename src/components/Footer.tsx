import React from "react";
import { Link } from "react-router-dom";
import { Image } from "antd";
import logo from "assets/images/logo.png";
import { RouteName } from "constants/route";

export default function Footer() {
  return (
    <footer className="w-full  text-white bg-black h-auto mx-auto">
      <div className="flex flex-col md:flex-row max-w-[1512px]  mx-auto px-11 pt-11 pb-[74px]  gap-10">
        <div className=" flex justify-center">
          <Link
            className="flex max-sm:flex-col md:max-1100:flex-col md:max-1100:justify-center gap-4 items-center"
            to={RouteName.Home}
          >
            <img src={logo} alt="logo" height={20} className="h-6" />
            <p className="uppercase text-base font-bold tracking-widest">
              Melabooks
            </p>
          </Link>
        </div>
        <div className="flex max-sm:flex-col max-sm:justify-center max-sm:items-center  mx-auto gap-8">
          <div className="flex flex-col">
            <h2 className="text-xl capitalize font-bold mb-2">
              Addis Ababa Branch
            </h2>
            <ul className="flex flex-col max-sm:text-center list-none gap-2">
              <li className="text-sm font-cursive">Addis Ababa,Ethiopia</li>
              <li className="text-sm">+25111 273 4554</li>
              <li className="text-sm">+251 91 366 7537</li>
              <li className="text-sm">info@melabooks.com</li>
              <li className="text-sm">melabooksa@gmail.com</li>
              <li className="text-sm">Gulele Subcity ,Woreda 09 </li>
            </ul>
          </div>
          <div className="flex flex-col ">
            <h2 className="text-xl capitalize font-bold mb-2">
              other country Branch
            </h2>

            <ul className="flex flex-col max-sm:text-center list-none gap-2">
              <li className="text-sm font-cursive">other</li>
              <li className="text-sm">+252 123 456 789</li>
              <li className="text-sm">+252 123 456 789</li>
              <li className="text-sm">info@mela-som.com</li>
              <li className="text-sm">melaweb@gmail.com</li>
              <li className="text-sm">Cabaaye Bus Station, Downtown</li>
              <li className="text-sm">europe, other</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="flex flex-col max-w-[331px]">
            <h1 className="text-xl ">Subscribe Us.</h1>
            <p className="text-xs">Get the latest updates and Stay tuned.</p>
            <div className="flex w-full mt-6 border rounded-3 overflow-clip">
              <input
                type="search"
                placeholder="E-mail address"
                className="py-2 text-black pl-4 pr-10 outline-none w-full"
              />
              <button className="w-[74px] text-xs tracking-wide p-2 rounded-t-none rounded-r-3 rounded-b-3 rounded-l-none border text-black bg-cardYellow">
                subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[90px] text-black flex justify-center items-center bg-colorGray">
        <p className="text-base text-textGray">© 2023 - melabooks PLC </p>
      </div>
    </footer>
  );
}
