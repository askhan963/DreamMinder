import React, { useState } from 'react';

const GoalForm = ({ addGoal }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === '') {
      return; // Don't submit empty goal
    }
    addGoal(text);
    setText(''); // Clear input field after submission
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new goal"
        className="p-2 border rounded-md mr-2"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Add Goal
      </button>
    </form>
  );
};

export default GoalForm;
