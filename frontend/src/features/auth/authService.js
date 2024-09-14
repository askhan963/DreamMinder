import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users';

// Function to handle login API request
const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  return response.data;
};

// Function to handle signup API request
const signup = async (name, email, password) => {
  const response = await axios.post(API_URL, { name, email, password });
  return response.data;
};

export default {
  login,
  signup,
};
