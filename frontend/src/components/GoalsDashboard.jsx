import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GoalList from './GoalList';
import GoalForm from './GoalForm';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GoalsDashboard = () => {
  const [goals, setGoals] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch goals when the component mounts
  useEffect(() => {
    const fetchGoals = async () => {
      const token = localStorage.getItem('token'); // Assuming the user token is stored in localStorage
      try {
        const response = await axios.get('http://localhost:5000/api/goals', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setGoals(response.data);
        setLoading(false);
      } catch (error) {
        toast.error('Error fetching goals');
        setLoading(false);
      }
    };

    fetchGoals();
  }, []);

  const addGoal = async (text) => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.post(
        'http://localhost:5000/api/goals',
        { text },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setGoals([...goals, response.data]);
      toast.success('Goal added!');
    } catch (error) {
      toast.error('Error adding goal');
    }
  };

  const deleteGoal = async (id) => {
    const token = localStorage.getItem('token');
    try {
      await axios.delete(`http://localhost:5000/api/goals/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setGoals(goals.filter((goal) => goal._id !== id));
      toast.success('Goal deleted!');
    } catch (error) {
      toast.error('Error deleting goal');
    }
  };

  const updateGoal = async (id, newText) => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.put(
        `http://localhost:5000/api/goals/${id}`,
        { text: newText },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setGoals(goals.map((goal) => (goal._id === id ? response.data : goal)));
      toast.success('Goal updated!');
    } catch (error) {
      toast.error('Error updating goal');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ToastContainer />
      <h1>My Goals</h1>
      <GoalForm addGoal={addGoal} />
      <GoalList goals={goals} deleteGoal={deleteGoal} updateGoal={updateGoal} />
    </div>
  );
};

export default GoalsDashboard;
