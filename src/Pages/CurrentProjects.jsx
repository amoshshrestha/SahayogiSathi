import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CTASection from "../components/CTASection";

const projects = [
  {
    id: "current-0",
    title: "College Application Mentoring (Online)",
    description:
      "Guided students through the college application process, offering personalized mentoring and support. This initiative helped students access higher education opportunities and navigate the often complex application process to study abroad.",
  },
  {
    id: "current-1",
    title: "Handwashing Station at Bhaktapur School",
    cost: "Rs. 70,000 | $650",
    description:
      "In a public school at Bhaktapur, Nepal, children face significant challenges due to limited access to water and hygiene facilities. To address this, we aim to construct a handwashing station that will provide students with a reliable and sustainable way to maintain proper hygiene. The project will include a water-efficient system, soap dispensers, and drainage to ensure effective use of resources. Your generous donation will help create a healthier environment for these children, reducing the risk of diseases and empowering them to focus on their education.",
  },
  {
    id: "current-2",
    title: "Reusable Sanitary Pad Distribution",
    cost: "Rs. 70,000 | $650",
    description:
      "In a public school at Bhaktapur, Nepal, many girls face challenges in managing their menstrual health due to a lack of access to sanitary pads and proper awareness. This often leads to discomfort, absenteeism, and even school dropouts. To address this, we aim to distribute sanitary pads and provide menstrual hygiene education to empower young girls. By ensuring they have the resources and knowledge to manage their periods with dignity, we can help them stay in school, improve their confidence, and reduce dropout rates. Your support can transform lives and contribute to a brighter, more equitable future for these girls.",
  },
];

const CurrentProjects = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace("#", "");
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="relative w-full py-16 px-6">
      <div className="absolute inset-0 w-full h-full z-[-1]">
        <img
          src="/images/svg/projects.svg"
          alt="Projects Background"
          className="w-full h-full object-cover opacity-80 translate-y-28"
        />
      </div>

      <div className="relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-12">
            Current Projects
          </h1>
        </div>

        {/* Projects Section */}
        <div
          id="current-projects"
          className="max-w-5xl mx-auto space-y-16 relative z-10"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              id={project.id}
              className=" p-6 shadow-md rounded-lg backdrop-blur-xs"
              tabIndex="0"
            >
              <h2 className="text-2xl font-bold text-gray-900">{project.title}</h2>
              {project.cost && (
                <h3 className="text-lg font-semibold text-yellow-600 mt-2">
                  {project.cost}
                </h3>
              )}
              <p className="text-gray-700 mt-4 leading-7 text-justify">
                {project.description}
              </p>
              {project.id === "current-0" && (
      <div className="mt-4 flex flex-col sm:flex-row gap-4 justify-center items-center text-center">
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSeU6h62lMLgJxyWg-h_z4NOctVEOJdsbFKRRWy9XnJG__jc9w/viewform?usp=header"
        className="hover:text-gray-500"
      >
        <button className="px-6 py-3 bg-[#A6CDC6] text-black font-medium text-base md:text-lg rounded-md hover:bg-[#8fb6af]">
          Become a Mentor
        </button>
      </a>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSfgY8ZZPB087rLcHj7WPucLFnpAl7Q54mb4iQCUStEHyImzGw/viewform?usp=header"
        className="hover:text-gray-500"
      >
        <button className="px-6 py-3 bg-[#A6CDC6] text-black font-medium text-base md:text-lg rounded-md hover:bg-[#8fb6af]">
          Become a Mentee
        </button>
      </a>
    </div>
    )}
            </div>
          ))}
          
        </div>
      </div>

      {/* Call to Action Section */}
      <CTASection />
    </div>
  );
};

export default CurrentProjects;
