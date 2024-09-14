import { useState } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();  // Use navigate hook for programmatic navigation

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/users/login', {
        email: formData.email,
        password: formData.password
      });

      if (response && response.data) {
        toast.success("Login successful! Redirecting to dashboard...");

        // Optionally save token to localStorage or context for later use
        localStorage.setItem('token', response.data.token);

        // Redirect to the dashboard after a short delay
        setTimeout(() => {
          navigate('/');
        }, 2000);  // Optional delay of 2 seconds

      } else {
        throw new Error("Invalid response from server.");
      }

    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message); // API-specific error message
      } else {
        toast.error("Login failed! Please try again.");
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        
        {/* Login Heading */}
        <h2 className="flex justify-center space-x-4 items-center text-3xl font-bold text-center mb-6">
         <span> Login </span>
          <FaSignInAlt />
        </h2>

        {/* Login Description */}
        <p className="text-center text-gray-600 mb-6">
          Please enter Email and Password to Login to your account.
        </p>
        
        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
          <div className="text-center mt-4 text-gray-600">
            Don't have an account? <Link to='/signup' className="text-blue-500 hover:underline font-semibold">Create Account</Link> here.
          </div>
        </form>

        {/* Toast Container for Notifications */}
        <ToastContainer />
      </div>
    </div>
  );
}

export default Login;
