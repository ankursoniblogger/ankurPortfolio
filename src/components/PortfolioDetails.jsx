import React from "react";

const PortfolioDetails = ({ img, title, url }) => {
  return (
    <div>
      <a href={url} rel="nofollow" target="_blank">
        <img
          src={img}
          alt={title}
          className="rounded-sm object-cover drop-shadow-xl cursor-pointer hover:opacity-80"
        />
      </a>
    </div>
  );
};

export default PortfolioDetails;
