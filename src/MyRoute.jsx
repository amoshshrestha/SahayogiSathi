import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layouts/Layout";
import About from "./Pages/About";
import Index from "./Pages/Index";
import ContactPage from "./Pages/Contact";
import Mission from "./Pages/Mission";
import CurrentProjects from "./Pages/CurrentProjects";
import Gallery from "./Pages/Gallery";
import PastProjects from "./Pages/PastProjects";
import DonatePage from "./Pages/DonatePages/Donate";
import DonateSuccess from "./Pages/DonatePages/DonateSucess";
import DonateCancel from "./Pages/DonatePages/DonateCancel";
import Donate from "./Pages/Donate";

const MyRoute = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/projects" element={<CurrentProjects />} />
            <Route path="/pastprojects" element={<PastProjects />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/donatenow" element={<DonatePage />} />
            <Route path="/donatesucess" element={<DonateSuccess />} />
            <Route path="/donatecancel" element={<DonateCancel />} />
            <Route path="/donate" element={<Donate />} />




          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MyRoute;
