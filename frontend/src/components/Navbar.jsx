import { Link } from "react-router-dom";
import { FaUser, FaSignInAlt, FaUserPlus, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the menu open/close
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Name */}
        <div className="text-3xl text-white font-bold">
          DreamMinder
        </div>

        {/* Hamburger Menu for mobile */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />} {/* Show FaTimes when open, FaBars when closed */}
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`${
            isOpen ? 'block' : 'hidden'
          } lg:flex space-x-6 text-white absolute lg:static top-16 left-0 w-full lg:w-auto bg-gray-800 lg:bg-transparent p-4 lg:p-0 transition-all duration-300`}
        >
          {/* Dashboard */}
          <li className="cursor-pointer text-lg flex items-center space-x-2">
            <Link to={'/'} className="hover:text-gray-300">Dashboard</Link>
            <FaUser />
          </li>
          
          {/* Login */}
          <li className="cursor-pointer text-lg flex items-center space-x-2">
            <Link to={'/login'} className="hover:text-gray-300">Login</Link>
            <FaSignInAlt />
          </li>

          {/* Sign Up */}
          <li className="cursor-pointer text-lg flex items-center space-x-2">
            <Link to={'/signup'} className="hover:text-gray-300">Sign Up</Link>
            <FaUserPlus />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
