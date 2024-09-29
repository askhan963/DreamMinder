import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users';

interface AuthResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

// Function to handle login API request
const login = async (email: string, password: string): Promise<AuthResponse> => {
  const response = await axios.post<AuthResponse>(`${API_URL}/login`, { email, password });
  return response.data;
};

// Function to handle signup API request
const signup = async (name: string, email: string, password: string): Promise<AuthResponse> => {
  const response = await axios.post<AuthResponse>(API_URL, { name, email, password });
  return response.data;
};

// Assign the object to a variable before exporting it
const authService = {
  login,
  signup,
};

export default authService;