import React from "react";
const FirstSection = () => {
  return (
    <>
      <section className="py-12 px-6 md:px-16">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-left">
            <h3 className=" uppercase tracking-widest text-black font-bold mb-2">
              MISSION
            </h3>
            <p className="text-gray-800 text-lg leading-relaxed text-justify">
              To empower children in Nepal by ensuring access to education,
              health resources, and opportunities for growth, fostering an
              inclusive environment where every child can thrive regardless of
              their background.
            </p>
            {/* <p className="text-gray-800 text-lg leading-relaxed mt-4 text-justify">
              In addition to our educational initiatives, we are committed to
              responding to emergencies, including natural disasters and public
              health crises, by providing immediate relief and long-term support
              to help families and communities rebuild and recover.
            </p> */}
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
