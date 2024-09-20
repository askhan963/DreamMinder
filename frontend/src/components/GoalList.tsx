
import GoalItem from './GoalItem';

interface Goal {
  _id: string;
  text: string;
}

interface GoalListProps {
  goals: Goal[]; // Array of Goal objects
  deleteGoal: (id: string) => void; // Function to delete a goal by its ID
  updateGoal: (id: string, newText: string) => void; // Function to update a goal's text by its ID
}

const GoalList: React.FC<GoalListProps> = ({ goals, deleteGoal, updateGoal }) => {
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
