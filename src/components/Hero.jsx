import React from "react";
import data from "../data.json";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div className="text-white min-h-[400px] flex flex-col items-center justify-center font-jack md:text-5xl text-4xl tracking-tighter md:leading-[1.1em]">
      <p className="font-thin">Hi!, I'm</p>
      <h2 className="font-thin">{data.intro.name}</h2>

      <h3 className="font-bold md:text-5xl text-lightGreen text-2xl ">
        <Typewriter
          options={{
            strings: [
              "Full Stack Developer",
              "Digital Marketer",
              "Social Media Marketer",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </h3>
    </div>
  );
};

export default Hero;
