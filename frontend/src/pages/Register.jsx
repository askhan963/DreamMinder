import React, { useState } from "react";
import { FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form validation or submission logic here
    console.log(formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        
        {/* Register Heading */}
        <h2 className="flex justify-center space-x-4 items-center text-3xl font-bold text-center mb-6">
         <span> Register </span>
          <FaUserPlus />
        </h2>

        {/* Registration Description */}
        <p className="text-center text-gray-600 mb-6">
          Please fill in the details below to create a new account.
        </p>
        
        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

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

          {/* Confirm Password Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
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
            Register
          </button>
          <div className="text-center mt-4 text-gray-600">
  Already have an account? <Link to='/login' className="text-blue-500 hover:underline font-semibold">Login </Link> here.
</div>

        </form>
      </div>
    </div>
  );
}

export default Register;
