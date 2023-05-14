import React from "react";
import data from "../data.json";
import { Icon } from "@iconify/react";

const Header = () => {
  return (
    <div className="text-lightGreen flex justify-between  md:w-9/12  mx-auto font-jack font-medium">
      <h1 className="text-2xl tracking-tighter text-center cursor-pointer">
        {data.intro.logo}
      </h1>
      <button
        onClick={() =>
          (window.location = "https://ankitsoni.in/project/resume.pdf")
        }
        className="flex items-center gap-1 justify-center text-xs bg-black px-4 rounded-full cursor-pointer"
      >
        <Icon icon="material-symbols:download" />
        Resume
      </button>
    </div>
  );
};

export default Header;
