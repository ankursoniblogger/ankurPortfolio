import React from "react";
import { Icon } from "@iconify/react";

const ExpertDetails = (e) => {
  return (
    <div className="text-white  hover:text-lightGreen hover:opacity-100  text-5xl">
      <Icon icon={e.icon} />
      <p className="font-jack font-thin text-xs text-center cursor-default tracking-tighter mt-1">
        {e.name}
      </p>
    </div>
  );
};

export default ExpertDetails;
