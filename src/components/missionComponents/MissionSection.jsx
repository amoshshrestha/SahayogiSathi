import React from "react";
import {
  ShieldCheck,
  HeartHandshake,
  BookOpen,
  Home,
  Users,
} from "lucide-react";

const missions = [
  {
    icon: <ShieldCheck size={28} />,
    title: "Tackle Discrimination"
  },
  {
    icon: <BookOpen size={28} />,
    title: "Equal Education Access",
    },
 
  {
    icon: <Users size={28} />,
    title: "Empowering Marginalized Communities",
    },
 
 
 
  
];
const Lmissions = [
  {
    icon: <Home size={28} />,
    title: "Community Rebuilding and Resilience",
     },
 
  {
    icon: <HeartHandshake size={28} />,
      title: "Disaster Response and Relief",
  },


];

const MissionSection = () => {
  return (
    <section className="bg-[#FAF7ED] py-12 px-6 md:px-16 text-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Mission</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {missions.map((mission, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4"
            >
              <div className="bg-black text-white p-2 rounded-lg mb-4">
                {mission.icon}
              </div>
              <h3 className="text-lg font-bold">{mission.title}</h3>
              <p className="text-gray-700 mt-2">{mission.description}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          {Lmissions.map((mission, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4"
            >
              <div className="bg-black text-white p-2 rounded-lg mb-4">
                {mission.icon}
              </div>
              <h3 className="text-lg font-bold">{mission.title}</h3>
              <p className="text-gray-700 mt-2">{mission.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
