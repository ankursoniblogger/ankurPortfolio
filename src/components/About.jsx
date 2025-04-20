import React from "react";
import data from "../data.json";
import aboutMe from "../assets/about.png";

const About = () => {
  const { heading, description, button } = data.about;
  return (
    <div className="md:flex md:w-9/12 md:mt-20 mx-auto justify-center sm:gap-10">

      <div className=" md:w-2/4 md:space-y-6 mt-10  md:mt-0  space-y-3 text-white">
        <h1 className="animate-pulse font-jack font-bold text-3xl tracking-tighter mb-17">
          {heading}
        </h1>
        <p className="font-jack font-light text-sm tracking-wide text-justify  leading-6 mb-10;">
          {description}
        </p>
        <button
          onClick={() => (window.location.href = "https://wa.me/7318326631")}
          className="bg-black text-lightGreen  px-5 py-3 rounded-full text-sm  font-jack font-extralight "
        >
          {button}
        </button>
      </div>


      <div className="md:w-[400px]">
        <img
          className="h-96.1 mx-auto object-cover w-96 rounded-md drop-shadow-2xl"
          src={aboutMe}
          alt="ankur soni"
        />
      </div>
    </div>
  );
};

export default About;
