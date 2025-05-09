import React, { useState } from "react";
import CTASection from "../components/CTASection";
import EventSection from "../components/EventSection";
import { useNavigate, Link } from "react-router-dom";
import { useSubscription } from "./../api/service/subscribeService";
import ProjectsSection from "../components/missionComponents/ProjectSection";

const Index = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const { mutate } = useSubscription();
  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(
      { email },
      {
        onSuccess: () => {
          toast.success("Succesfully subscribed");
          setEmail("");
        },
        onError: (error) => {
          toast.error(
            error.response?.data?.message ||
              "An error occurred while subscription."
          );
        },
      }
    );
  };
  return (
    <>
      <div className="relative w-full h-[500px] bg-cover bg-center flex items-center bg-white">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 max-w-3xl mx-auto text-left px-10">
          <h1 className="text-white text-4xl font-bold mb-5 justify-center">
            Dear Supporters, stay connected with our latest updates and impact.
          </h1>
          <div className="flex flex-col w-full gap-4">
            <h1 className="text-white text-3xl font-bold">
              Subscribe to our newsletter today!
            </h1>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-5  w-full max-w-lg"
            >
              <input
                type="email"
                placeholder="Your email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border px-6 py-2 w-full text-white text-xl focus:outline-none focus:ring-2 focus:ring-[#16404D] rounded-md"
              />
              <button
                type="submit"
                className="bg-[#A6CDC6] text-[#16404D] text-lg font-medium px-6 py-2 rounded-md hover:bg-[#8fb6af]"
              >
                Subscribe
              </button>
            </form>
          </div>
          {/* <h1 className="text-white text-5xl font-bold mb-6">
            Donate For a Cause
          </h1>
          <Link to="/donate"
            className="hover:text-gray-500"
          >
            <button className="bg-[#A6CDC6] text-[#16404D] text-lg font-medium px-6 py-3 rounded-md hover:bg-[#8fb6af]">
              Donate Now
            </button>
          </Link> */}
        </div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: "url('/images/doanteforcause.JPG')" }}
        ></div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between px-10 lg:px-28 py-16 bg-white text-black">
        <div className="lg:w-1/2">
          <h2 className="text-2xl lg:text-3xl font-bold uppercase tracking-wider border-l-4 border-yellow-500 pl-4 mb-6">
            About Us
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Sahayogi Saathi, a youth- and women-led foundation established in
            January 2021, was first created to address the economic hardships
            families face—especially after the COVID-19 pandemic left many
            unable to afford their children's education. Guided by the belief
            that no child should be deprived of schooling due to financial
            constraints, our mission drives every effort we undertake.
          </p>
          <button
            onClick={() => navigate("/about")}
            className="mt-6 bg-yellow-500 text-black px-6 py-3 rounded-md font-medium hover:bg-yellow-600"
          >
            Learn More
          </button>
        </div>
        <div className="lg:w-1/2 flex justify-center mt-10 lg:mt-0">
          <img
            src="/images/knowabout.JPG"
            alt="About Us"
            className="rounded-2xl shadow-lg w-full max-w-md lg:max-w-lg"
          />
        </div>
      </div>
      <ProjectsSection />
      <CTASection />
      <EventSection />
    </>
  );
};

export default Index;
