import { useState, useEffect } from "react";
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GoalForm from '../components/GoalForm';
import GoalList from '../components/GoalList';
const API_URL = `${process.env.REACT_APP_API_URL}`;

interface Goal {
  _id: string;
  text: string;
}

function Dashboard() {
  const [userName, setUserName] = useState<string>(""); // To store user's name
  const [goals, setGoals] = useState<Goal[]>([]); // To store goals
  const [loading, setLoading] = useState<boolean>(true); // Loading state

  // Fetch user data and goals on component mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Fetch user data
      const fetchUserData = async () => {
        try {
          const response = await axios.get<{ name: string }>(`${API_URL}/users/me`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          if (response && response.data) {
            setUserName(response.data.name); // Set the user's name
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };

      // Fetch goals data
      const fetchGoals = async () => {
        try {
          const response = await axios.get<Goal[]>(`${API_URL}/goals`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setGoals(response.data); // Set the goals data
          setLoading(false);
        } catch (error) {
          toast.error('Error fetching goals');
          setLoading(false);
        }
      };

      fetchUserData();
      fetchGoals();
    }
  }, []);

  // Add a new goal
  const addGoal = async (text: string) => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.post<Goal>(
        `${API_URL}/goals`,
        { text },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setGoals([...goals, response.data]); // Update goal list
      toast.success('Goal added!');
    } catch (error) {
      toast.error('Error adding goal');
    }
  };

  // Delete a goal
  const deleteGoal = async (id: string) => {
    const token = localStorage.getItem('token');
    try {
      await axios.delete(`${API_URL}/goals/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setGoals(goals.filter((goal) => goal._id !== id)); // Filter out deleted goal
      toast.success('Goal deleted!');
    } catch (error) {
      toast.error('Error deleting goal');
    }
  };

  // Update a goal
  const updateGoal = async (id: string, newText: string) => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.put<Goal>(
        `${API_URL}/goals/${id}`,
        { text: newText },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setGoals(goals.map((goal) => (goal._id === id ? response.data : goal))); // Update the goal in the state
      toast.success('Goal updated!');
    } catch (error) {
      toast.error('Error updating goal');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-4">
      <ToastContainer />
      <h2 className="text-3xl font-bold mb-4">
        Welcome, {userName ? userName : "Guest"}!
      </h2>

      {/* GoalForm Component */}
      <GoalForm addGoal={addGoal} />

      {/* GoalList Component */}
      <GoalList goals={goals} deleteGoal={deleteGoal} updateGoal={updateGoal} />
    </div>
  );
}

export default Dashboard;
