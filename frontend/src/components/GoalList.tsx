import React from 'react';
import GoalItem from './GoalItem';

const GoalList = ({ goals, deleteGoal, updateGoal }) => {
  return (
    <div>
      {goals.length > 0 ? (
        goals.map((goal) => (
          <GoalItem
            key={goal._id}
            goal={goal}
            deleteGoal={deleteGoal}
            updateGoal={updateGoal}
          />
        ))
      ) : (
        <p>No goals yet!</p>
      )}
    </div>
  );
};

export default GoalList;
