import React from "react";
import data from "../data.json";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div id="home" className="text-white min-h-[400px] flex flex-col items-center justify-center font-jack md:text-5xl text-4xl tracking-normal md:leading-[1.1em]">
      <p className="font-thin z-10">Hi!, I'm</p>
      <h2 className="font-thin z-10">{data.intro.name}</h2>
      <h2 className="uppercase   opacity-5 -z-0 font-jack md:text-[200px] text-5xl font-extrabold tracking-widest absolute">
        {data.intro.name}
      </h2>
      <h3 className="font-bold md:text-5xl z-10 text-lightGreen text-2xl ">
        <Typewriter
          options={{
            strings: [
              'Frontend Developer',
              'Backend Developer',
              // "Full Stack Developer",
              // "Digital Marketer",
              // "Social Media Marketer",
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
