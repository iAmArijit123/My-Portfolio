import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#040b17] text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-cyan-400">
          <Link to="/">ARIJIT SASMAL</Link>
        </div>

        <ul className="hidden md:flex gap-8 text-sm font-medium">
          <li>
            <Link to="/" className="hover:text-cyan-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-cyan-400">
              About
            </Link>
          </li>
          <li>
            <Link to="/education" className="hover:text-cyan-400">
              Education
            </Link>
          </li>
          <li>
            <Link to="/project" className="hover:text-cyan-400">
              Project
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-cyan-400">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
