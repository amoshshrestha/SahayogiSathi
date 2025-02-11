import React from "react";

const events = [
  {
    title: "Handwashing Station at Bhaktapur School",
  },
  {
    title: "Reusable Sanitary Pad Distribution",
  },
];

const EventSection = () => {
  return (
    <div className="relative flex justify-center items-center w-full">
      <div className="max-w-screen-xl w-full">
        <div className="flex flex-col md:flex-row items-center mb-8 w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center lg:text-left">
            Current Projects
          </h2>
          <div className="border-t border-black flex-grow ml-4 hidden md:block"></div>
        </div>
        {/* Updated layout logic */}
        <div className="flex justify-center gap-6 w-full flex-col md:flex-col lg:flex-row items-center lg:items-stretch">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-[#A6CDC6] rounded-2xl p-6 md:p-8 text-center h-auto shadow-lg w-full sm:w-[450px] md:w-[550px] lg:w-[600px] flex flex-col justify-between min-h-full"
            >
              <h3 className="text-lg md:text-xl lg:text-2xl font-medium mb-4 text-[#16404D]">
                {event.title}
              </h3>
              <div className="flex justify-center gap-3 md:gap-4">
                <button className="bg-[#16404D] text-white py-2 px-4 md:px-6 rounded text-sm md:text-base lg:text-lg">
                  Volunteer
                </button>
                <button className="bg-[#16404D] text-white py-2 px-4 md:px-6 rounded text-sm md:text-base lg:text-lg">
                  Donate
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventSection;
