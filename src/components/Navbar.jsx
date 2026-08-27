import React, { useState } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-[90%] max-w-6xl mx-auto mt-4 sm:mt-6 px-5 sm:px-8 py-4 rounded-[30px] bg-white shadow-lg">

      <div className="flex justify-between items-center">

        <Link to="/" className="text-xl sm:text-2xl font-bold text-blue-600" >Snehal</Link>

        <div className="hidden md:flex items-center gap-5 lg:gap-18">

          <Link to="/" className="text-gray-700 hover:text-blue-600 transition">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600 transition">About</Link>
          <Link to="/projects" className="text-gray-700 hover:text-blue-600 transition">Projects</Link>
          <Link to="/skills" className="text-gray-700 hover:text-blue-600 transition">Skills</Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition">Contact</Link>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden  hover:bg-gray-100 transition"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>

      </div>

      {menuOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-gray-200">

          <div className="flex flex-col items-center gap-4">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition">About</Link>
            <Link to="/projects" className="text-gray-700 hover:text-blue-600 transition">Projects</Link>
            <Link to="/skills" className="text-gray-700 hover:text-blue-600 transition">Skills</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition">Contact</Link>

          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
