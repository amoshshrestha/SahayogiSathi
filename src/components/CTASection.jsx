import React from "react";

const CTASection = () => {
  return (
    <div className="relative w-full mx-auto my-10 px-6 md:px-16 lg:px-28">
      <div className="bg-black rounded-2xl overflow-hidden flex justify-center items-center px-4 md:px-6 lg:px-8 py-16 md:py-24 relative">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: "url('/images/group.jpg')" }}
        ></div>

        <div className="relative flex flex-col items-center text-center max-w-4xl">
          <h2 className="text-white font-bold text-3xl md:text-5xl leading-tight">
            Invest in Nepal's future - empower children with education.
          </h2>
          <div className="mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScGv3xmbebauL3buWnYOwvmM_4mWHDEQQJ7abD8fI-qGbO37w/viewform" className="hover:text-gray-500">
            <button className="px-6 py-3 bg-yellow-400 text-black font-medium text-base md:text-lg rounded-md hover:bg-[#8fb6af]">
              
              Join as a Volunteer
            </button>
            </a>
            <a href="https://www.gofundme.com/f/transform-bhaktapur-schools-hygiene-facilities/cl/o" className="hover:text-gray-500">
            <button className="px-6 py-3 bg-[#16404D] text-white font-medium text-base md:text-lg rounded-md hover:bg-[#8fb6af]">
             Donate
            </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
