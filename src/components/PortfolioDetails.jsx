
import React from "react";

const PortfolioDetails = ({ img, title, desc, url }) => {
  return (
    <div className="bg-[#1a1a1a] rounded-md shadow-md overflow-hidden text-left">
      <a href={url} rel="noopener noreferrer" target="_blank">
        <img
          src={img}
          alt={title}
          className="w-full h-[180px] object-cover transition duration-300 hover:opacity-90"
        />
      </a>
      <div className="p-3">
        <h3 className="text-white font-semibold text-base">{title}</h3>
        <p className="text-gray-300 text-sm mt-2">{desc}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 text-sm  inline-block mt-2 "
        >
          Visit Project
        </a>
      </div>
    </div>
  );
};

export default PortfolioDetails;







// import React from "react";

// const PortfolioDetails = ({  img, title, desc, url }) => {
//   return (
//     <div>
//       <a href={url} rel="nofollow" target="_blank">
//         <img
//           src={img}
//           alt={title}
//           className="rounded-sm object-cover drop-shadow-xl cursor-pointer hover:opacity-80"
//         />
//       </a>
//     </div>
//   );
// };

// export default PortfolioDetails;

// import React from "react";

// const PortfolioDetails = ({ img, title, desc, url }) => {
//   return (
//     <div className="text-center">
//       <a href={url} rel="nofollow" target="_blank">
//         <img
//           src={img}
//           alt={title}
//           className="rounded-sm object-cover drop-shadow-xl cursor-pointer hover:opacity-80 w-full"
//         />
//       </a>
//       <h3 className="text-sm font-semibold mt-2">{title}</h3>
//       <p className="text-xs text-gray-400 mt-1">{desc}</p>
//     </div>
//   );
// };

// export default PortfolioDetails;


