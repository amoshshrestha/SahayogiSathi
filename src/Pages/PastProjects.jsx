// CurrentProjects.js
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CTASection from "../components/CTASection";

const useProjects = () => ({ data: [] });


const pastProjects = [
  {
    id: "past-0",
    title: "Sindhupalchowk Cloth Drive",
    description:
      "Distributed 50 large bags of clothing and 3 bags of toys to children and families across three schools in Sindhupalchowk. This initiative aimed to address immediate needs for warm clothing ahead of a harsh winter while fostering joy and creativity among children through the donation of toys.",
  },
  {
    id: "past-1",
    title: "Sponsor a Child’s Education for a Year",
    feature: "home page",
    description:
      "Raised NRs. 156,147 to sponsor the education of over 50 preschoolers whose parents lost their jobs during and after the COVID-19 pandemic. This initiative ensured financial hardships did not disrupt these children’s access to early education and learning opportunities.",
  },
  {
    id: "past-2",
    title: "Floodlight Donation at Helambu, Sindhupalchowk",
    feature: "home page",
    description:
      "Partnering with Feed the Hungry Nepal, Sahayogi Sathi fundraised up to NRs. 40,000, providing emergency supplies and floodlights to support flood-affected communities in Helambu, Sindhupalchowk. This effort enhanced safety and met immediate needs during a time of crisis.",
  },
  {
    id: "past-3",
    title: "Ration Distribution for Flood Victims in Tanahun and Bandipur",
    description:
      "Partnering with Feed the Hungry Nepal, Sahayogi Saathi fundraised up to NRs. 30,000 to supply food and tents to flood victims in Tanahun and Bandipur. These resources provided critical relief to families who had lost their homes and belongings due to devastating floods.",
  },
  {
    id: "past-4",
    title: "Books for a Cause: Saptari Learning Centers",
    feature: "home page",
    description:
      "Collected over 1,500 books through partnerships with two schools and student-led clubs in Kathmandu. These books enriched the resources available at a local learning center in Saptari, supporting students’ education and fostering a love of learning.",
  },
  
  {
    id: "past-6",
    title: "Feed the Homeless in New York City",
    description:
      "Collected unused food items and cafeteria coupons from students’ dorms before summer break, providing essentials to over 50 homeless individuals in the Washington Square and Union Square Park area.",
  },
];


const PastProjects = () => {
  // 2) If you have a service, you can still call it:
  const { data: project } = useProjects();

  // 3) Use `useLocation` to watch for hash changes:
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // remove the '#' from the start of location.hash
      const targetId = location.hash.replace("#", "");
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <div className="relative w-full bg-[#FEFDFC] py-16 px-6">
        
        

        

        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-12 mt-12">
            Past Projects
          </h1>
        </div>

        {/* Past Projects Section */}
        <div
          id="past-projects"
          className="max-w-5xl mx-auto space-y-16 relative z-10"
        >
          {pastProjects.map((project, index) => (
            <div
              id={`p-${project.id}`}
              key={index}
              className="bg-white p-6 shadow-md rounded-lg"
            >
              <h2 className="text-2xl font-bold text-gray-900">
                {project.title}
              </h2>
              <p className="text-gray-700 mt-4 leading-7 text-justify">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      
    </>
  );
};

export default PastProjects;
