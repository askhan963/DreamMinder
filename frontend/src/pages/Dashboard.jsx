import { useState, useEffect } from "react";
import axios from 'axios';

function Dashboard() {
  const [userName, setUserName] = useState(""); // To store user's name

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Fetch user data
      const fetchUserData = async () => {
        try {
          const response = await axios.get('http://localhost:5000/api/users/me', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });

          if (response && response.data) {
            setUserName(response.data.name); // Set the user's name
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };

      fetchUserData();
    }
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <h2 className="text-3xl font-bold">
        Welcome, {userName ? userName : "Guest"}!
      </h2>
    </div>
  );
}

export default Dashboard;
