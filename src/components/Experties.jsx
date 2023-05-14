import React from "react";
import ExpertDetails from "./ExpertDetails";

const Experties = () => {
  return (
    <div className="mt-20 md:w-9/12 mx-auto">
      <h1 className="font-jack font-bold text-3xl tracking-tighter  text-white text-center">
        I'm expert in!
      </h1>
      <div className="w-full mx-auto flex item-center flex-wrap md:gap-12 gap-5 text-center justify-center mt-10 ">
        <ExpertDetails icon="ion:logo-react" name="React JS" />
        <ExpertDetails icon="devicon-plain:mongodb" name="Mongo DB" />
        <ExpertDetails icon="akar-icons:node-fill" name="Node JS" />
        <ExpertDetails icon="mdi:language-python" name="Python" />
        <ExpertDetails icon="mdi:aws" name="Server" />
        <ExpertDetails icon="mdi:wordpress" name="WordPress" />
        <ExpertDetails icon="basil:adobe-photoshop-solid" name="Photoshop" />
      </div>
    </div>
  );
};

export default Experties;
