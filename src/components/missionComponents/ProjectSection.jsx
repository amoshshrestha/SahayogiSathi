import React from "react";
import { Link } from 'react-router-dom';

const ProjectsSection = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-16 text-black">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-lg uppercase font-semibold tracking-widest mb-6">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link to="/pastprojects#past-0" className="relative rounded-xl overflow-hidden shadow-lg h-64 flex flex-col justify-center items-center text-center p-4 group cursor-pointer">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105 group-hover:opacity-100"
              style={{
                backgroundImage: "url('/images/clothDonation.jpg')",
                opacity: 0.8,
                filter: "brightness(50%)",
              }}
            ></div>
            <div className="absolute inset-0 bg-black/30 transition-opacity duration-500 group-hover:opacity-0"></div>
            <div className="relative z-10 text-white p-4 rounded-lg">
              <h3 className="text-2xl font-bold transition-transform duration-500 group-hover:scale-110">Clothing Drive</h3>
            </div>
          </Link>

          <Link to="/pastprojects#past-4" className="relative rounded-xl overflow-hidden shadow-lg h-64 flex flex-col justify-center items-center text-center p-4 group cursor-pointer">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105 group-hover:opacity-100"
              style={{
                backgroundImage: "url('/images/bookDonation.jpg')",
                opacity: 0.8,
                filter: "brightness(50%)",
              }}
            ></div>
            <div className="absolute inset-0 bg-black/30 transition-opacity duration-500 group-hover:opacity-0"></div>
            <div className="relative z-10 text-white p-4 rounded-lg">
              <h3 className="text-2xl font-bold transition-transform duration-500 group-hover:scale-110">Books for a Cause</h3>
            </div>
          </Link>

          <Link to="/pastprojects#past-6" className="relative rounded-xl overflow-hidden shadow-lg h-64 flex flex-col justify-center items-center text-center p-4 group cursor-pointer">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105 group-hover:opacity-100"
              style={{
                backgroundImage: "url('/images/feedthehomeless.jpeg')",
                opacity: 0.8,
                filter: "brightness(50%)",
              }}
            ></div>
            <div className="absolute inset-0 bg-black/30 transition-opacity duration-500 group-hover:opacity-0"></div>
            <div className="relative z-10 text-white p-4 rounded-lg">
              <h3 className="text-2xl font-bold transition-transform duration-500 group-hover:scale-110">Feed the Homeless</h3>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
