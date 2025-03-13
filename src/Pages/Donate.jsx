import React from "react";
import { Link } from "react-router-dom";

const Donate = () => {
  return (
    <section className="bg-[#c9e5dc] min-h-screen flex items-center justify-center py-10 px-4 md:px-8">
      <div className="max-w-6xl mx-auto w-full">
        {/* Use a responsive flex container: stack on small screens, side-by-side on larger */}
        <div className="flex flex-col md:flex-row items-center md:items-start">
          {/* Text content */}
          <div className="md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Making a donation to transform lives.
            </h1>
            <p className="text-gray-700 mb-6">
              Support our initiatives to provide essential resources like
              handwashing stations, sanitary pads, and educational opportunities
              for underprivileged children and youth in Nepal. Together, we can
              create healthier schools, empower students, and build a brighter
              future. Every contribution counts—donate now and be a part of this
              impactful journey!
            </p>
            <a
                href="https://www.gofundme.com/f/transform-bhaktapur-schools-hygiene-facilities/cl/o"
                
              className="hover:text-gray-500">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-md font-semibold transition-colors">
                Donate now
              </button>
            </a>
          </div>

          {/* Image */}
          <div className="mt-8 md:mt-0 md:w-1/2 md:pl-8 flex justify-center">
            {/* Replace the src below with your actual image file or a hosted image URL */}
            <img
              src="/images/clothDonation.jpg"
              alt="Donation box"
              className="rounded-lg shadow-md max-w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;
