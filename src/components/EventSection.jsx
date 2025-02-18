import React from "react";
import { useProjects } from "./../api/service/projectService";
import { Link } from "react-router-dom";
const projects = [
  {
    id: "current-0",
    title: "College Application Mentoring (Online)",
    description:
      "Guided students through the college application process, offering personalized mentoring and support. This initiative helped students access higher education opportunities and navigate the often complex application process to study abroad.",
    status: "active",
  },
  {

    id: "current-1",
    title: "Handwashing Station at Bhaktapur School",
    cost: "Rs. 70,000 | $650",
    description:
      "In a public school at Bhaktapur, Nepal, children face significant challenges due to limited access to water and hygiene facilities. To address this, we aim to construct a handwashing station that will provide students with a reliable and sustainable way to maintain proper hygiene. The project will include a water-efficient system, soap dispensers, and drainage to ensure effective use of resources. Your generous donation will help create a healthier environment for these children, reducing the risk of diseases and empowering them to focus on their education.",
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

                  <Link to={`/projects#c-${project.id}`}
                    className="hover:text-gray-500"
                  >
                    <button className="bg-[#16404D] text-white py-2 px-4 md:px-6 rounded text-sm md:text-base lg:text-lg hover:bg-[#6e8a84]">
                      Learn more...
                    </button>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default EventSection;
