import React from "react";
const FirstSection = () => {
  return (
    <>
      <section className="py-12 px-6 md:px-16">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-left">
            <h3 className=" uppercase tracking-widest text-black font-bold mb-2">
              WHAT OUR MISSION IS
            </h3>
            <p className="text-gray-800 text-lg leading-relaxed text-justify">
              Our mission is to ensure every child, regardless of financial
              hardships, gender, or caste, has access to education and
              opportunities to thrive. We work to address systemic inequalities
              by tackling discrimination against girls and children from
              marginalized communities.
            </p>
            <p className="text-gray-800 text-lg leading-relaxed mt-4 text-justify">
              In addition to our educational initiatives, we are committed to
              responding to emergencies, including natural disasters and public
              health crises, by providing immediate relief and long-term support
              to help families and communities rebuild and recover.
            </p>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0 md:pl-8">
            <img
              src="/images/ChildrenImage.svg"
              alt="Children Smiling"
              className="rounded-xl  object-cover w-full h-auto"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default FirstSection;
