import React from "react";
import ExpertDetails from "./ExpertDetails";

const Experties = () => {
  return (
    <div className="mt-20 md:w-9/12 mx-auto">
      <h1 className="font-jack font-bold text-3xl tracking-wide  text-white text-center">
        I'm expert in!
      </h1>
      <div className="w-full mx-auto flex item-center flex-wrap md:gap-12 gap-5 text-center justify-center mt-10 ">
        <ExpertDetails icon="ion:logo-react" name="React JS" />
        <ExpertDetails icon="devicon-plain:mongodb" name="Mongo DB" />
        <ExpertDetails icon="mdi:alpha-e-circle" name="Express JS" />
        <ExpertDetails icon="akar-icons:node-fill" name="Node JS" />
        <ExpertDetails icon="mdi:language-html5" name="HTML" />
        <ExpertDetails icon="mdi:language-css3" name="CSS" />
        <ExpertDetails icon="mdi:language-javascript" name="JavaScript" />
        <ExpertDetails icon="mdi:language-typescript" name="TypeScript" />
        <ExpertDetails icon="simple-icons:tailwindcss" name="Tailwind CSS" />
        <ExpertDetails icon="mdi:git" name="Git" />
        <ExpertDetails icon="mdi:github" name="GitHub" />

      </div>
    </div>
  );
};

export default Experties;
