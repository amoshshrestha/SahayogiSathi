import React from "react";

const CTASection = () => {
  return (
    <div className="relative w-full mx-auto my-10 bg-black rounded-2xl overflow-hidden flex justify-center items-center px-4 md:px-8 lg:px-12 py-16 md:py-24">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{ backgroundImage: "url('/images/group.jpg')" }}
      ></div>

      {/* Content */}
      <div className="relative flex flex-col items-center text-center max-w-4xl">
        <h2 className="text-white font-extrabold text-3xl md:text-5xl leading-tight">
          You can contribute to provide a place for children with special needs!
        </h2>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="px-6 py-3 bg-yellow-400 text-black font-medium text-base md:text-lg rounded-md">
            Join as a volunteer
          </button>
          <button className="px-6 py-3 bg-teal-900 text-white font-medium text-base md:text-lg rounded-md">
            Donate
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
