import { useState } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
function Login() {
  const [formData, setFormData] = useState({
    
    email: "",
    password: ""
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
      
      {/* Login Heading */}
      <h2 className="flex justify-center space-x-4 items-center text-3xl font-bold text-center mb-6">
       <span> Login </span>
        <FaSignInAlt />
      </h2>

      {/* Registration Description */}
      <p className="text-center text-gray-600 mb-6">
        Please enter Email and Password to Login to your account.
      </p>
      
      {/* Registration Form */}
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
          Register
        </button>
        <div className="text-center mt-4 text-gray-600">
  Don't have an account? <Link to='/signup' className="text-blue-500 hover:underline font-semibold">Create Account</Link> here.
</div>

      </form>

    </div>
  </div>
  )
}

export default Login