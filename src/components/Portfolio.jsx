import React from "react";
import data from "../data.json";
import PortfolioDetails from "./PortfolioDetails";

const Portfolio = () => {
  const { heading, description } = data.work;
  const portfolioDate = data.work.portfolio;


  return (
    <div id="projects" className="bg-black  md:w-9/12 mx-auto text-white flex flex-col justify-center items-center p-6 mt-20 py-20 rounded-md drop-shadow-lg">
      <h1 className="font-jack font-bold text-4xl tracking-normal ">
        {heading}
      </h1>
      <p className="font-jack text-xs font-thin mt-4 tracking-wide md:w-2/5 text-center ">
        {description}
      </p>

      <div className="w-full  mx-auto mt-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 overflow-hidden rounded-mdtext-center">
        {portfolioDate.map((e) => {
          return (
            <PortfolioDetails
              key={e.id}
             img={e.img}
             title={e.text}
              desc={e.desc}
             url={e.url}
                github={e.github}
            stack={e.stack}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;


// return (
//   <div className="bg-black w-full md:w-10/12 mx-auto text-white flex flex-col justify-center items-center p-6 mt-20 py-20 rounded-md drop-shadow-lg">
//     <h1 className="font-jack font-bold text-3xl tracking-tighter">
//       {heading}
//     </h1>
//     <p className="font-jack text-xs font-thin mt-4 tracking-tight md:w-2/5 text-center">
//       {description}
//     </p>

//     <div className="w-full mx-auto mt-10 grid md:grid-cols-2 gap-6">
//       {portfolioDate.map((e) => (
//         <PortfolioDetails
//           key={e.id}
//           img={e.img}
//           title={e.text}
//           desc={e.desc}
//           url={e.url}
//         />
//       ))}
//     </div>
//   </div>
// );
