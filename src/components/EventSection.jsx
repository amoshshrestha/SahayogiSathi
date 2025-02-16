import React from "react";
import { useProjects } from "./../api/service/projectService";

const projects = [
  {
    title: "Handwashing Station at Bhaktapur School",
    status: "active",
  },
  {
    title: "Reusable Sanitary Pad Distribution",
    status: "active",
  },
];

const EventSection = () => {
  const { data: event } = useProjects();
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
        <div className="flex flex-wrap justify-center gap-6 w-full items-center lg:items-stretch">
          {projects
            ?.filter((project) => project.status === "active")
            .map((project, index) => (
              <div
                key={index}
                className="bg-[#A6CDC6] rounded-2xl p-6 md:p-8 text-center h-auto shadow-lg w-full sm:w-[450px] md:w-[550px] lg:w-[600px] flex flex-col justify-between min-h-full"
              >
                <h3 className="text-lg md:text-xl lg:text-2xl font-medium mb-4 text-[#16404D]">
                  {project.title}
                </h3>
                <div className="flex justify-center gap-3 md:gap-4">
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLScGv3xmbebauL3buWnYOwvmM_4mWHDEQQJ7abD8fI-qGbO37w/viewform">
                    <button className="bg-[#16404D] text-white py-2 px-4 md:px-6 rounded text-sm md:text-base lg:text-lg hover:bg-[#6e8a84]">
                      Volunteer
                    </button>
                  </a>
                  <a
                    href="https://www.gofundme.com/f/transform-bhaktapur-schools-hygiene-facilities/cl/o"
                    className="hover:text-gray-500"
                  >
                    <button className="bg-[#16404D] text-white py-2 px-4 md:px-6 rounded text-sm md:text-base lg:text-lg hover:bg-[#6e8a84]">
                      Donate
                    </button>
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default EventSection;
