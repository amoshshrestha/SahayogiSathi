import React from "react";
import EventSection from "../components/EventSection";
import CTASection from "../components/CTASection";
import callbackify from "./../../node_modules/axios/lib/helpers/callbackify";

const About = () => {
  return (
    <>
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-10 md:py-20">
          

          

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
            <div className="space-y-6 md:space-y-10">
              
              <div className="space-y-6 text-base md:text-lg text-gray-700 leading-relaxed">
              <div className="text-1xl md:text-2xl xl:text-2xl uppercase tracking-wide text-gray-600  font-bold">
            ABOUT US
          </div>
              
                <p className="text-justify">
                Sahayogi Saathi, a youth- and women-led foundation established in January 2021, was first created to address the economic hardships families face—especially after the COVID-19 pandemic left many unable to afford their children's education. Guided by the belief that no child should be deprived of schooling due to financial constraints, our mission drives every effort we undertake.
                  </p>

                <p className="text-justify">
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
                <p className="text-justify">
                We aim to empower children by addressing their educational, health, and developmental needs, ensuring they have the foundational resources required to thrive in the long term. We are dedicated to creating systemic changes in education, combating discrimination based on sex, gender, caste, and race, and ensuring every child has the opportunity to succeed in an inclusive and supportive environment.

                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CTASection />
      <EventSection />
    </>
  );
};

export default About;

// <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
//   <div className="relative group order-2 lg:order-1">
//     <div className="relative overflow-hidden rounded-2xl shadow-2xl">
//       <img
//         src="https://images.unsplash.com/photo-1594708767771-a7502209ff51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
//         alt="Women helping in community"
//         className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
//       />
//       <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
//     </div>
//     <div className="absolute -bottom-6 -right-6 -left-6 h-32 bg-foundation-beige/30 -z-10 rounded-2xl blur-2xl"></div>
//   </div>

//   <div className="order-1 lg:order-2">
//     <div className="space-y-6 md:space-y-10">
//       <div className="bg-foundation-beige p-8 rounded-2xl">
//         <p className="text-gray-700 leading-relaxed text-base md:text-lg">
//           While education is at the heart of our mission, we also respond to
//           national emergencies such as natural disasters and public health
//           crises. From disaster relief to addressing immediate needs, we are
//           committed to supporting vulnerable communities. Beyond immediate
//           assistance, we strive to create systemic changes in education, reduce
//           discrimination against girls, and ensure that every child has the
//           opportunity to thrive in a supportive and inclusive environment.
//         </p>
//       </div>
//     </div>
//   </div>
// </div>;
