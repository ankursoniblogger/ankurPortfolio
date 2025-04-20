import React from "react";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <footer className="mt-20 md:w-9/12  mx-auto flex justify-between items-center">
      <p className="text-white text-sm font-jack">
        &copy; {new Date().getFullYear()}
        <span className="font-jack font-thin"> Made with Love ❤️</span>
      </p>
      <div className="flex gap-2 text-base text-lightGreen">
        {/* <a href="https://www.facebook.com/Ankitsoniblogger" target="_blank">
          <Icon
            className="cursor-pointer hover:text-white"
            icon="ic:baseline-facebook"
          />
        </a> */}
        
        <a href="https://github.com/ankursoniblogger" target="_blank">
          <Icon className="cursor-pointer hover:text-white" icon="mdi:github" />
        </a>
        <a href="https://www.linkedin.com/in/ankur-soni-blogger/" target="_blank">
          <Icon
            className="cursor-pointer hover:text-white"
            icon="mdi:linkedin"
          />
        </a>
        <a href="https://www.instagram.com/ankur.soni20/" target="_blank">
          <Icon
            className="cursor-pointer hover:text-white"
            icon="ph:instagram-logo-fill"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
