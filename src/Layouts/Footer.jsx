import React from "react";
import logo from "/images/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#FBF5DD] py-10 px-28 flex flex-wrap justify-between mt-6">
      <div className="flex flex-col items-center">
        <img src={logo} alt="Sahayogi Logo" className="w-64 mr-4" />
      </div>
      <div className="flex flex-col">
        <h3 className="text-lg font-bold text-[#16404D]">Home</h3>
        <a href="#about" className="text-[#525560] text-md">
          About us
        </a>
        <a href="#mission" className="text-[#525560] text-md">
          Mission
        </a>
        <a href="#camera-roll" className="text-[#525560] text-md">
          Camera Roll
        </a>
        <a href="#contact" className="text-[#525560] text-md">
          Contact us
        </a>
      </div>

      <div className="flex flex-col">
        <h3 className="text-lg font-bold text-[#16404D]">More</h3>
        <a href="#projects" className="text-[#525560] text-md">
          Projects
        </a>
        <a href="#events" className="text-[#525560] text-md">
          Events
        </a>
        <a href="#donate" className="text-[#525560] text-md">
          Donate
        </a>
        <a href="#blog" className="text-[#525560] text-md">
          Blog
        </a>
      </div>

      <div className="flex flex-col">
        <h3 className="text-lg font-bold text-[#16404D]">Connect</h3>
        <a href="#facebook" className="text-[#525560] text-md">
          Facebook
        </a>
        <a href="#instagram" className="text-[#525560] text-md">
          Instagram
        </a>
        <a href="#twitter" className="text-[#525560] text-md">
          Twitter
        </a>
        <a href="#linkedin" className="text-[#525560] text-md">
          LinkedIn
        </a>
      </div>

      <div className="flex flex-col">
        <h3 className="text-2xl font-bold text-[#16404D]">
          Subscribe to get latest updates
        </h3>
        <div className="flex mt-4">
          <input
            type="email"
            placeholder="Your email"
            className="border px-4 py-2 w-72 text-[#525560]"
          />
          <button className="bg-[#16404D] text-white px-6 py-2">
            Subscribe
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
