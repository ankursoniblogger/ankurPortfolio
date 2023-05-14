import React from "react";
import { Icon } from "@iconify/react";

const CalltoAction = () => {
  return (
    <div className="bg-lightGreen md:w-9/12 mx-auto text-black md:flex items-center md:justify-between p-6 md:px-20 mt-10 md:py-20 py-10 rounded-md ">
      <h1 className="font-jack font-bold text-3xl tracking-tight">
        Let's Get started with us. <br /> One click away.
      </h1>
      <button className="bg-darkGreen text-white gap-2 pl-6  justify-center font-jack font-medium md:mt-0 mt-6 md:w-auto w-full rounded-full p-1.5 flex items-center">
        <a href="https://wa.me/971521902215" target="_blank">
          Get Started
        </a>
        <span className=" bg-lightGreen rounded-full p-3">
          <Icon className=" text-black" icon="ph:arrow-up-right" />
        </span>
      </button>
    </div>
  );
};

export default CalltoAction;
