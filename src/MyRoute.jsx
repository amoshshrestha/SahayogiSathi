import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layouts/Layout";
import About from "./Pages/About";
import Index from "./Pages/Index";
import ContactPage from "./Pages/Contact";
import Mission from "./Pages/Mission";
import CurrentProjects from "./Pages/CurrentProjects";

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
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MyRoute;
