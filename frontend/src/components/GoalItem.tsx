import  { useState } from 'react';

interface Goal {
  _id: string;
  text: string;
}

interface GoalItemProps {
  goal: Goal; // Define the type for goal object
  deleteGoal: (id: string) => void; // Function to delete goal based on its ID
  updateGoal: (id: string, newText: string) => void; // Function to update goal based on its ID and new text
}
const GoalItem: React.FC<GoalItemProps> = ({ goal, deleteGoal, updateGoal }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(goal.text);

  const handleUpdate = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newText.trim() === '') return;
    updateGoal(goal._id, newText);
    setIsEditing(false);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6 flex justify-between items-center space-x-4 transform transition duration-300 hover:scale-105 hover:shadow-lg">
      {isEditing ? (
        <form onSubmit={handleUpdate} className="flex-grow flex items-center space-x-4">
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className="flex-grow p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300"
          >
            Save
          </button>
        </form>
      ) : (
        <p className="text-gray-800 text-lg flex-grow break-words">{goal.text}</p>
      )}
      <div className="flex items-center space-x-4">
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition duration-300"
        >
          {isEditing ? 'Cancel' : 'Edit'}
        </button>
        <button
          onClick={() => deleteGoal(goal._id)}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default GoalItem;
