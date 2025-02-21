import React from "react";
import EventSection from "../components/EventSection";
import CTASection from "../components/CTASection";
import callbackify from "./../../node_modules/axios/lib/helpers/callbackify";

const About = () => {
  return (
    <>
    <div className="relative min-h-screen">
    <div className="absolute inset-0 w-full h-full z-[-1]">
        <img
          src="/images/svg/about.svg"
          alt="Projects Background"
          className="w-full h-full object-cover opacity-80 translate-y-28"
        />
      </div>
        
        {/* Gallery Content */}
        <div className="relative z-10">
      
      <div className="min-h-screen">
      
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-10 md:py-20">
          

          

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
            <div className="space-y-6 md:space-y-10">
              
              <div className="space-y-6 text-base md:text-lg text-gray-700 leading-relaxed">
              <div className="text-1xl md:text-2xl xl:text-2xl uppercase tracking-wide text-gray-600  font-bold">
            ABOUT US
          </div>
              
                <p>
                Sahayogi Saathi, a youth- and women-led foundation established in January 2021, was first created to address the economic hardships families face—especially after the COVID-19 pandemic left many unable to afford their children's education. Guided by the belief that no child should be deprived of schooling due to financial constraints, our mission drives every effort we undertake.
                  </p>

                <p>
                Our journey began in Sindhupalchowk, a region frequently affected by natural disasters such as floods and landslides and deeply impacted by the 2015 earthquake. We saw the region’s ongoing vulnerabilities as a call to action and focused on sponsoring children’s education, distributing clothing and books, and providing disaster relief. Over time, we expanded our efforts to other regions across Nepal, reaching more communities in need.
                </p>
              </div>
            </div>
            <div className="relative group">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="images/cloth-drive.jpg"
                  alt="Image"
                  className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 -left-6 h-32 bg-foundation-beige/30 -z-10 rounded-2xl blur-2xl"></div>
            </div>
          </div>

          {/* <div className="mt-4 lg:mt-6">
            <p className="text-gray-700 leading-relaxed text-base md:text-lg text-justify">
            We aim to empower children by addressing their educational, health, and developmental needs, ensuring they have the foundational resources required to thrive in the long term. We are dedicated to creating systemic changes in education, combating discrimination based on sex, gender, caste, and race, and ensuring every child has the opportunity to succeed in an inclusive and supportive environment.
            
            </p>
            </div> */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center mt-4 lg:mt-6">
            <div className="relative group">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="images/bookDonation.jpg"
                  alt="Image"
                  className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 -left-6 h-32 bg-foundation-beige/30 -z-10 rounded-2xl blur-2xl"></div>
            </div>

            <div className="space-y-6 md:space-y-10">
              <div className="space-y-6 text-base md:text-xl text-gray-700 leading-relaxed">
                <p >
                We aim to empower children by addressing their educational, health, and developmental needs, ensuring they have the foundational resources required to thrive in the long term. We are dedicated to creating systemic changes in education, combating discrimination based on sex, gender, caste, and race, and ensuring every child has the opportunity to succeed in an inclusive and supportive environment.

                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CTASection />
      <EventSection />
                  </div>
                </div>
    </>
  );
};

export default About;
