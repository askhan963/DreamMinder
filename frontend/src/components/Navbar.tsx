import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaSignInAlt, FaUserPlus, FaBars, FaTimes, FaSignOutAlt } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from 'axios';
const API_URL = `${process.env.REACT_APP_API_URL}`;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState(""); // To store user email
  const navigate = useNavigate();

  // Toggle the menu open/close
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Fetch user data if logged in
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);

      // Fetch user data
      const fetchUserData = async () => {
        try {
          const response = await axios.get(`${API_URL}/users/me`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });

          if (response && response.data) {
            setUserEmail(response.data.email); // Set the email
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };

      fetchUserData();
    }
  }, []);

  // Handle Sign Out
  const handleSignOut = () => {
    localStorage.removeItem('token');  // Remove token from localStorage
    setIsLoggedIn(false);              // Update logged-in state
    setUserEmail("");                  // Clear user email
    navigate('/login');                // Redirect to login page
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

          {isLoggedIn ? (
            <>
              {/* User's Email */}
              <li className="cursor-pointer text-lg flex items-center space-x-2">
                <span>{userEmail}</span>
              </li>

              {/* Sign Out */}
              <li className="cursor-pointer text-lg flex items-center space-x-2">
                <button onClick={handleSignOut} className="hover:text-gray-300">Sign Out</button>
                <FaSignOutAlt />
              </li>
            </>
          ) : (
            <>
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
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
