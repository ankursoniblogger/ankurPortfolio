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




// import React from "react";
// import data from "../data.json";
// import { Icon } from "@iconify/react";

// const Header = () => {
//   return (
//     <div className="sticky top-0 z-50 bg-darkGreen text-lightGreen flex justify-between items-center md:w-9/12 mx-auto font-jack font-medium px-4 py-2">
      
//       {/* Logo */}
//       <h1 className="text-2xl tracking-wide text-center cursor-pointer flex gap-0.5">
//         {data.intro.logo.split("").map((char, index) => (
//           <span
//             key={index}
//             className="transition-transform duration-300 ease-in-out hover:scale-140 hover:skew-y-3"
//           >
//             {char}
//           </span>
//         ))}
//       </h1>

//       {/* Navigation + Resume (in one line, resume unchanged) */}
//       <div className="flex items-center gap-6">
//         {/* Navigation Links */}
//         <div className="flex items-center gap-4 text-xs">
//           <a href="#home" className="hover:underline cursor-pointer">Home</a>
//           <a href="#projects" className="hover:underline cursor-pointer">Project</a>
//           <a href="#expert" className="hover:underline cursor-pointer">Expert</a>
//         </div>

//         {/* Resume Button (unchanged) */}
// <button
//   onClick={() => window.open("/resume.html", "_blank")}
//   className="flex items-center gap-1 justify-center text-xs bg-black px-4 py-2.5 rounded-full cursor-pointer"
// >
//   <Icon icon="material-symbols:download" />
//   Resume
// </button>


//       </div>
//     </div>
//   );
// };

// export default Header;












import React, { useState } from "react";
import data from "../data.json";
import { Icon } from "@iconify/react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-darkGreen text-lightGreen font-jack font-medium">
      
      <div className="flex justify-between items-center md:w-9/12 mx-auto px-4 py-3">
        
        {/* Logo */}
        <h1 className="text-xl sm:text-2xl tracking-wide cursor-pointer flex gap-0.5 flex-wrap max-w-[60%]">
          {data.intro.logo.split("").map((char, index) => (
            <span
              key={index}
              className="transition-transform duration-300 ease-in-out hover:scale-125 hover:skew-y-3"
            >
              {char}
            </span>
          ))}
        </h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          
          {/* Navigation */}
          <div className="flex items-center gap-5 text-sm">
            <a href="#home" className="hover:underline">Home</a>
            <a href="#projects" className="hover:underline">Project</a>
            <a href="#expert" className="hover:underline">Expert</a>
          </div>

          {/* Resume Button */}
          <button
            onClick={() => window.open("/resume.html", "_blank")}
            className="flex items-center gap-1 text-sm bg-black px-4 py-2 rounded-full"
          >
            <Icon icon="material-symbols:download" />
            Resume
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <Icon icon={menuOpen ? "mdi:close" : "mdi:menu"} width="24" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-4 text-sm bg-darkGreen">
          
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Project</a>
          <a href="#expert" onClick={() => setMenuOpen(false)}>Expert</a>

          <button
            onClick={() => window.open("/resume.html", "_blank")}
            className="flex items-center gap-1 bg-black px-4 py-2 rounded-full"
          >
            <Icon icon="material-symbols:download" />
            Resume
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;