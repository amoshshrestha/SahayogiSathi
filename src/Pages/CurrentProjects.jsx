import { useState } from "react";
import CTASection from "../components/CTASection";
import { useProjects } from "../api/service/projectService";

const projects = [
  {
    title: "Handwashing Station at Bhaktapur School",
    cost: "Rs. 70,000 | $650",
    description:
      "In a public school at Bhaktapur, Nepal, children face significant challenges due to limited access to water and hygiene facilities. To address this, we aim to construct a handwashing station that will provide students with a reliable and sustainable way to maintain proper hygiene. The project will include a water-efficient system, soap dispensers, and drainage to ensure effective use of resources. Your generous donation will help create a healthier environment for these children, reducing the risk of diseases and empowering them to focus on their education.",
  },
  {
    title: "Reusable Sanitary Pad Distribution",
    cost: "Rs. 70,000 | $650",
    description:
      "In a public school at Bhaktapur, Nepal, many girls face challenges in managing their menstrual health due to a lack of access to sanitary pads and proper awareness. This often leads to discomfort, absenteeism, and even school dropouts. To address this, we aim to distribute sanitary pads and provide menstrual hygiene education to empower young girls. By ensuring they have the resources and knowledge to manage their periods with dignity, we can help them stay in school, improve their confidence, and reduce dropout rates. Your support can transform lives and contribute to a brighter, more equitable future for these girls.",
  },
];

const CurrentProjects = () => {
  const { data: project } = useProjects();

  return (
    <>
      <div className="relative w-full bg-[#FEFDFC] py-16 px-6">
        {/* Header Title */}
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-12">
            Current Projects
          </h1>
        </div>

        {/* Projects Section */}
        <div className="max-w-5xl mx-auto space-y-16 relative z-10">
          {projects?.map((project, index) => (
            <div key={index} className="bg-white p-6 shadow-md rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900">
                {project.title}
              </h2>
              <h3 className="text-lg font-semibold text-yellow-600 mt-2">
                {project.cost}
              </h3>
              <p className="text-gray-700 mt-4 leading-7 text-justify">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <CTASection />
    </>
  );
};

export default CurrentProjects;
