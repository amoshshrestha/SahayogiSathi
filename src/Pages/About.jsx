import React from "react";
import EventSection from "../components/EventSection";
import CTASection from "../components/CTASection";
import callbackify from "./../../node_modules/axios/lib/helpers/callbackify";

const About = () => {
  return (
    <>
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-10 md:py-20">
          <div className="text-sm md:text-base uppercase tracking-wide text-gray-600 mb-6 md:mb-10 font-medium">
            KNOW ABOUT US
          </div>

          <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-foundation-green leading-tight mb-4">
            We are a Youth and Women-led Foundation.
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
            <div className="space-y-6 md:space-y-10">
              <div className="space-y-6 text-base md:text-lg text-gray-700 leading-relaxed">
                <p className="text-justify">
                  Established in January 2021 to address the economic hardships
                  faced by families during the post-COVID era. Many parents lost
                  their jobs, leaving them unable to afford their children's
                  education. We believe that no child should be deprived of
                  schooling due to financial constraints, and this vision drives
                  our work.
                </p>

                <p className="text-justify">
                  While based in Kathmandu, our efforts began in
                  Sindhupalchowk—a region deeply impacted by the 2016 earthquake
                  and recurrent natural disasters like landslides and floods.
                  Recognizing the urgent need for support in this area, we
                  focused our initial projects there, including sponsoring
                  children's education, distributing clothing and books, and
                  providing flood relief. Today, we have expanded our efforts to
                  other regions in Nepal, aiming to make a broader impact.
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

          <div className="mt-4 lg:mt-6">
            <p className="text-gray-700 leading-relaxed text-base md:text-lg text-justify">
              Our work is centered on empowering children by addressing their
              educational, health, and developmental needs. This includes
              covering school tuition, providing essential resources like books
              and clothing, conducting menstrual hygiene workshops, and
              mentoring high school students through college applications. We
              also aim to support younger children by providing foundational
              resources to help them succeed in the long term.
            </p>
          </div>
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
                  While education is at the heart of our mission, we also
                  respond to national emergencies such as natural disasters and
                  public health crises. From disaster relief to addressing
                  immediate needs, we are committed to supporting vulnerable
                  communities. Beyond immediate assistance, we strive to create
                  systemic changes in education, reduce discrimination against
                  girls, and ensure that every child has the opportunity to
                  thrive in a supportive and inclusive environment.
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
