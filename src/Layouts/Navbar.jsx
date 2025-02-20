import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  const toggleProjects = () => setIsProjectsOpen(!isProjectsOpen);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const toggleAbout = () => setIsAboutOpen(!isProjectsOpen);

  return (
    <nav className="bg-[#FAF7ED] py-4 px-6 md:px-16 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src="/images/logo.png" alt="Logo" className="h-10" />
        </div>

        <ul className="hidden md:flex space-x-8 text-gray-800 font-medium">
          <li>
            <Link to={"/"} className="hover:text-gray-500">
              Home
            </Link>
          </li>
          
          <li className="relative group">
            <Link to="/projects" className="hover:text-gray-500">
              About us
            </Link>
            <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <li>
                <Link to="/mission" className="block px-4 py-2 hover:bg-gray-100">
                  Mission
                </Link>
              </li>
              <li>
                <Link to="/about" className="block px-4 py-2 hover:bg-gray-100">
                  Vision
                </Link>
              </li>
            </ul>
          </li>
          
          <li>
            <Link to={"/gallery"} className="hover:text-gray-500">
              Gallery
            </Link>
          </li>
          <li>
          <Link to="/donate" className="hover:text-gray-500">
              Donate
            </Link>
            
          </li>
          <li className="relative group">
            <Link to="/projects" className="hover:text-gray-500">
              Projects
            </Link>
            <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <li>
                <Link to="/projects" className="block px-4 py-2 hover:bg-gray-100">
                  Current Projects
                </Link>
              </li>
              <li>
                <Link to="/pastprojects" className="block px-4 py-2 hover:bg-gray-100">
                  Past Projects
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to={"/contact"} className="hover:text-gray-500">
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#FAF7ED] p-4 mt-2 shadow-md">
          <ul className="space-y-4 text-gray-800 text-center font-medium">
            <li>
              <Link to={"/"} className="block">
                Home
              </Link>
            </li>
            <li>
              <Link to={"/about"} className="block">
                About us
              </Link>
            </li>
            <li>
              <Link to={"/mission"} className="block">
                Mission
              </Link>
            </li>
            <li>
              <Link to={"/gallery"} className="block">
                Gallery
              </Link>
            </li>
            <li>
              <a
                href="https://www.gofundme.com/f/transform-bhaktapur-schools-hygiene-facilities/cl/o"
                className="block"
              >
                Donate
              </a>
            </li>
            <li>
              <Link to="/projects" className="block px-4 py-2 hover:bg-gray-100">
                Current Projects
              </Link>
            </li>
            <li>
              <Link to="/pastprojects" className="block px-4 py-2 hover:bg-gray-100">
                Past Projects
              </Link>
            </li>
            <li>
              <Link to={"/contact"} className="block">
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
