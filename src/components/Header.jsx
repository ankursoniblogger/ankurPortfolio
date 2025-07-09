// import React from "react";
// import data from "../data.json";
// import { Icon } from "@iconify/react";
// // import "./Header.css";


// const Header = () => {
//   return (
//     // <div className="text-lightGreen flex justify-between  md:w-9/12  mx-auto font-jack font-medium">
//     <div className="sticky top-0 z-50 bg-darkGreen text-lightGreen flex justify-between md:w-9/12 mx-auto font-jack font-medium px-4 py-2">

 
//  <h1 className="text-2xl tracking-wide text-center cursor-pointer flex gap-0.5 ">
//   {data.intro.logo.split("").map((char, index) => (
//     <span
//       key={index}
//       className="transition-transform duration-300 ease-in-out  hover:scale-140 hover:skew-y-3 "
//     >
//       {char}
//     </span>
//   ))}
// </h1>

//       {/* <h1 className="text-2xl tracking-wide text-center cursor-pointer animate-typing">

//         {data.intro.logo}
//       </h1> */}
//       <button
//         onClick={() =>
//          ( window.open(
//       "https://drive.google.com/file/d/1H4_zKATi5DsUh7ZLnp07_hqlThyP5EX1/view?usp=sharing",
//       "_blank"
//     ))
//         }
//         className="flex items-center gap-1 justify-center text-xs bg-black px-4 rounded-full cursor-pointer"
//       >
//         <Icon icon="material-symbols:download" />
//         Resume
//       </button>
//     </div>
//   );
// };

// export default Header;




import React from "react";
import data from "../data.json";
import { Icon } from "@iconify/react";

const Header = () => {
  return (
    <div className="sticky top-0 z-50 bg-darkGreen text-lightGreen flex justify-between items-center md:w-9/12 mx-auto font-jack font-medium px-4 py-2">
      
      {/* Logo */}
      <h1 className="text-2xl tracking-wide text-center cursor-pointer flex gap-0.5">
        {data.intro.logo.split("").map((char, index) => (
          <span
            key={index}
            className="transition-transform duration-300 ease-in-out hover:scale-140 hover:skew-y-3"
          >
            {char}
          </span>
        ))}
      </h1>

      {/* Navigation + Resume (in one line, resume unchanged) */}
      <div className="flex items-center gap-6">
        {/* Navigation Links */}
        <div className="flex items-center gap-4 text-xs">
          <a href="#home" className="hover:underline cursor-pointer">Home</a>
          <a href="#projects" className="hover:underline cursor-pointer">Project</a>
          <a href="#expert" className="hover:underline cursor-pointer">Expert</a>
        </div>

        {/* Resume Button (unchanged) */}
<button
  onClick={() => window.open("/resume.html", "_blank")}
  className="flex items-center gap-1 justify-center text-xs bg-black px-4 py-2.5 rounded-full cursor-pointer"
>
  <Icon icon="material-symbols:download" />
  Resume
</button>


      </div>
    </div>
  );
};

export default Header;
