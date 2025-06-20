import React from "react";

const PortfolioDetails = ({ img, title, desc, url, github, stack }) => {
  return (
    <div className="bg-[#1a1a1a] rounded-md shadow-md overflow-hidden text-left p-4">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img
          src={img}
          alt={title}
          className="w-full h-[180px] object-cover rounded hover:opacity-90 transition"
        />
      </a>
      <h3 className="text-white font-semibold text-lg mt-4">{title}</h3>

      <div className="mt-2">
        {/* <p className="text-sm text-gray-400 mb-1">Tech Stack:</p> */}
        <ul className="flex flex-wrap gap-2 mb-2">
          {stack.map((tech, index) => (
            <li
              key={index}
              className="text-xs bg-gray-700 text-white px-2 py-1 rounded"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <ul className="text-sm text-gray-300 list-disc list-inside space-y-1">
        {desc.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>

      <div className="flex gap-4 mt-4">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 text-sm hover:underline text-lightGreen"
        >
          GitHub
        </a>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-400 text-sm hover:underline text-lightGreen"
        >
          Live Demo
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


