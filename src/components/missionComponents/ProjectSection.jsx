import React from "react";

const ProjectsSection = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-16 text-black">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-lg uppercase font-semibold tracking-widest mb-6">
          Projects We Have Done
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative rounded-xl overflow-hidden shadow-lg h-64 flex flex-col justify-center items-center text-center p-4">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/clothDonation.jpg')",
                opacity: 0.8,
                filter: "brightness(50%)",
              }}
            ></div>
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="relative z-10 text-white p-4 rounded-lg">
              <h3 className="text-xl font-bold">Cloth Drive</h3>
              <p className="text-sm mt-2">
                13 Gallon bags of Clothes and 13 Gallon bags of Toys collected
                for children and their Families of 3 Schools in Sindupalchowk.
              </p>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-lg h-64 flex flex-col justify-center items-center text-center p-4">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/bookDonation.jpg')",
                opacity: 0.8,
                filter: "brightness(50%)",
              }}
            ></div>
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="relative z-10 text-white p-4 rounded-lg">
              <h3 className="text-xl font-bold">Books for a Cause</h3>
              <p className="text-sm mt-2">
                1500+ books collected, partnered with 2 Schools and individual
                Donors.
              </p>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-lg h-64 flex flex-col justify-center items-center text-center p-4">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/ChildrenImage.svg')",
                opacity: 0.8,
                filter: "brightness(50%)",
              }}
            ></div>
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="relative z-10 text-white p-4 rounded-lg">
              <h3 className="text-xl font-bold">Feed the Homeless</h3>
              <p className="text-sm mt-2">
                Collected leftover dining dollars and remaining food items
                before students moved out of their dorms and went for summer
                break and donated it to 50+ homeless people in the Washington sq
                and union sq area.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
