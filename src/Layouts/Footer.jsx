import React from "react";
import logo from "/images/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#FBF5DD] py-8 w-full">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col items-center gap-12 md:gap-14 lg:gap-16 xl:gap-10">
        {/* Row 1: Logo & Links aligned properly */}
        <div className="flex flex-col md:flex-row items-center justify-center w-full gap-8 md:gap-24 lg:gap-32 xl:gap-64">
          {/* Logo */}
          <div className="flex justify-center md:justify-start w-full md:w-auto">
            <img
              src={logo}
              alt="Sahayogi Logo"
              className="w-28 sm:w-36 md:w-44 lg:w-52 xl:w-56"
            />
          </div>

          {/* Links - Single column below 600px, evenly spaced on larger screens */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-between items-center md:items-start w-full md:w-auto gap-6 sm:gap-10 md:gap-12 lg:gap-10">
            {/* Column 1 */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-2 w-full sm:w-auto">
              <h3 className="text-lg font-bold text-[#16404D]">Home</h3>
              <a href="/about" className="text-[#525560] text-md">
                Vision
              </a>
              <a href="/mission" className="text-[#525560] text-md">
                Mission
              </a>
              <a href="/gallery" className="text-[#525560] text-md">
                Camera Roll
              </a>
              <a href="/contact" className="text-[#525560] text-md">
                Contact us
              </a>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-2 w-full sm:w-auto">
              <h3 className="text-lg font-bold text-[#16404D]">More</h3>
              <a href="/pastprojects" className="text-[#525560] text-md">
                Past Projects
              </a>
              <a href="/projects" className="text-[#525560] text-md">
                Current Projects
              </a>
              <a
                href="/donatenow"
                className="text-[#525560] text-md"
              >
                Donate
              </a>
              <a href="/contact" className="text-[#525560] text-md">
                Contact us
              </a>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-2 w-full sm:w-auto">
              <h3 className="text-lg font-bold text-[#16404D]">Connect</h3>
              <a href="https://www.facebook.com/profile.php?id=100081288945979" className="text-[#525560] text-md">
              <i className="fab fa-facebook"></i> Facebook
              </a>
              <a href="https://www.instagram.com/sahayogisaathi/" className="text-[#525560] text-md">
              <i className="fab fa-instagram"></i> Instagram
              </a>
              <a href="tel:+1 929 471 3720 " className="text-[#525560] text-md">
              <i className="fas fa-phone"></i> Phone
              </a>
              
            </div>
          </div>
        </div>

        {/* Row 2: Subscribe */}
        <div className="flex flex-col items-center text-center w-full gap-4">
          <h3 className="text-xl md:text-2xl font-bold text-[#16404D]">
            Subscribe to get latest updates
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-5  w-full max-w-lg">
            <input
              type="email"
              placeholder="Your email"
              className="border px-4 py-2 w-full text-[#525560] focus:outline-none focus:ring-2 focus:ring-[#16404D] rounded-md"
            />
            <button className="bg-[#16404D] text-white px-6 py-2 w-full sm:w-auto rounded-md hover:bg-[#122F3A]">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
