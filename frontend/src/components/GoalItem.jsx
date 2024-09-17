import React, { useState } from 'react';

const GoalItem = ({ goal, deleteGoal, updateGoal }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(goal.text);

  const handleUpdate = (e) => {
    e.preventDefault();
    if (newText.trim() === '') return;
    updateGoal(goal._id, newText);
    setIsEditing(false);
  };

  return (
    <div className="mb-4">
      {isEditing ? (
        <form onSubmit={handleUpdate}>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className="p-2 border rounded-md mr-2"
          />
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md">
            Save
          </button>
        </form>
      ) : (
        <p>{goal.text}</p>
      )}
      <button
        onClick={() => setIsEditing(!isEditing)}
        className="bg-yellow-500 text-white px-4 py-2 rounded-md mr-2"
      >
        {isEditing ? 'Cancel' : 'Edit'}
      </button>
      <button
        onClick={() => deleteGoal(goal._id)}
        className="bg-red-500 text-white px-4 py-2 rounded-md"
      >
        Delete
      </button>
    </div>
  );
};

export default GoalItem;
