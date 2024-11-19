import React from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaTelegram,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function ContactCard() {
  return (
    <div className="w-full">
      <div className="min-w-[440px] flex justify-center rounded-10 pt-6 pb-8 bg-white">
        <form className="max-w-[360px] w-full  flex flex-col justify-center text-left gap-y-1">
          {/* <div className="w-full flex flex-col"> */}
          <h2 className="text-2xl font-medium capitalize">Contact Us</h2>
          <p className="text-14 capitalize">
            You can put your feedback messages sooner we will get reach out to
            you.
          </p>
          {/* </div> */}

          {/* <div className="flex w-max-[360px] flex-col"> */}
          <div className="w-full  flex flex-col">
            <label
              htmlFor="name"
              className="capitalize text-textColor text-sm text-left"
            >
              name
            </label>

            <input
              type="text"
              className="w-full placeholder:capitalize px-5 py-3 text-14 border border-borderColor rounded-lg"
              placeholder="enter your name"
            />
          </div>
          <div className="w-full flex flex-col">
            <label
              htmlFor="email"
              className="capitalize text-textColor text-sm text-left"
            >
              email
            </label>

            <input
              type="email"
              className="w-full placeholder:capitalize px-5 py-3 text-14 border border-borderColor rounded-lg"
              placeholder="enter your email"
            />
          </div>
          <div className="w-full flex flex-col">
            <label
              htmlFor="password"
              className="capitalize text-textColor text-sm text-left"
            >
              Password
            </label>

            <input
              type="password"
              className="w-full placeholder:capitalize px-5 py-3 text-14 border border-borderColor rounded-lg"
              placeholder="enter your password"
            />
          </div>
          <div className="w-full flex flex-col ">
            <label
              htmlFor="name"
              className="capitalize text-textColor text-sm text-left"
            >
              Message
            </label>
            <textarea
              rows={3}
              className="w-full px-5 py-3 text-14 border border-borderColor rounded-lg"
              placeholder="Put your message and your phone number. We will reach out to you."
            />
          </div>

          {/* button */}

          <button className="w-full mt-5 py-3 px-5 outline-none border disabled:cursor-not-allowed disabled:opacity-50 bg-cardYellow rounded-lg capitalize text-14 font-semibold text-center">
            sign in
          </button>
          {/* </div> */}
          <div className="w-full flex flex-col mt-6">
            <h3 className="text-14 font-semibold leading-[17px] text-center">
              Also available on:
            </h3>
            <div className="flex w-full justify-evenly mt-4 text-28">
              <Link to={"#"}>
                {" "}
                <FaWhatsapp />
              </Link>
              <Link to={"#"}>
                {" "}
                <FaInstagram />
              </Link>
              <Link to={"#"}>
                {" "}
                <FaFacebook />
              </Link>
              <Link to={"#"}>
                {" "}
                <FaTelegram />
              </Link>
              <Link to={"#"}>
                {" "}
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactCard;
