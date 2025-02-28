import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CTASection from "../components/CTASection";
import { useBlogs } from "../api/service/projectService";


const PastProjects = () => {
  const location = useLocation();
  const { data: pastProjects } = useBlogs();

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
      {/* SVG Background */}
      <div className="absolute inset-0 w-full h-full z-[-1]">
        <img
          src="/images/svg/projects.svg"
          alt="Projects Background"
          className="w-full h-full object-cover opacity-80 translate-y-28"
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-12">
            Past Projects
          </h1>
        </div>

        {/* Past Projects Section */}
        <div id="past-projects" className="max-w-5xl mx-auto space-y-16 relative z-10">
          {pastProjects
            ?.filter((project) => project.status === "completed")
            ?.map((project, index) => {
              // Extract available images
              const images = [project.image1, project.image2].filter(Boolean);
              const hasOneImage = images.length === 1;
              const hasTwoImages = images.length === 2;

              return (
                <div
                  key={index}
                  id={`past-${project.id}`}
                  className={`p-6 shadow-md rounded-lg backdrop-blur-xs flex flex-col ${hasOneImage ? "md:flex-row" : "flex-col"
                    } gap-4`}
                  tabIndex="0"
                >
                  {/* Description */}
                  <div className={`flex-1 ${hasOneImage ? "md:w-2/3" : "w-full"}`}>
                    <h2 className="text-2xl font-bold text-gray-900">{project.title}</h2>
                    <p className="text-gray-700 mt-4 leading-7 text-justify">{project.description}</p>
                  </div>

                  {/* Image Display Logic */}
                  {hasOneImage && (
                    <div className="w-full md:w-1/3 flex justify-center md:justify-end">
                      <img
                        src={`https://api.sahayogisaathi.org${images[0]}`}
                        alt="Project Image"
                        className="w-full md:w-60 h-auto object-cover rounded-md shadow-md"
                      />
                    </div>
                  )}

                  {hasTwoImages && (
                    <div className="w-full mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
                      {images.map((image, imgIndex) => (
                        <img
                          key={imgIndex}
                          src={`https://api.sahayogisaathi.org${image}`}
                          alt={`Project Image ${imgIndex + 1}`}
                          className="w-full md:w-72 h-auto max-h-72 object-cover rounded-md shadow-md"
                        />
                      ))}
                    </div>
                  )}

                </div>
              );
            })}
        </div>

      </div>

    </div>
  );
};

export default PastProjects;
