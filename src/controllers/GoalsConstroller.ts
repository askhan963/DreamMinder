
import express from 'express';
import GoalModel from '../models/GoalsModel';
import { CustomRequest } from '../middlewares/authMiddleware';
import userModel from '../models/UserModel';
export const getGoals = async (req:CustomRequest,res:express.Response) => {
    try {
        const goals = await GoalModel.find({
            user: req.user.id
        });
        if(!goals){
            console.log("Noting found in DB...")
        }
    res.status(200).json(goals);

    } catch (error) {
        console.log("Something went Wrong...",error);
    }
}
export const createGoal = async (req:CustomRequest,res:express.Response) => {
    // console.log(req.body)
    try {
        const newGoal = await GoalModel.create({
            text: req.body.text,
            user: req.user.id
        })
        if(newGoal){
            res.status(200).json(newGoal);
        }
    } catch (error) {
        console.log("Something went Wrong...",error);
    }
    
}
export const updateGoal = async (req: CustomRequest, res: express.Response) => {
    try {
      // Find the goal by its ID
      const foundGoal = await GoalModel.findById(req.params.id);
  
      if (!foundGoal) {
        return res.status(404).json({ message: "Goal not found" });
      }
  
      // Ensure the goal has a user associated with it
      if (!foundGoal.user) {
        return res.status(400).json({ message: "Goal has no associated user" });
      }
  
      // Check if the user exists in req.user (populated by the protect middleware)
      const user = await userModel.findById(req.user?.id);
  
      if (!user) {
        return res.status(401).json({ message: "User not found" });
      }
  
      // Compare user ObjectIds using Mongoose's equals method
      if (!foundGoal.user.equals(user._id)) {
        return res.status(403).json({ message: "User not authorized to update this goal" });
      }
  
      // Update the goal
      const updatedGoal = await GoalModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      
      res.status(200).json(updatedGoal);
    } catch (error) {
      console.log("Something went wrong...", error);
      res.status(500).json({ message: "Server error" });
    }
  };
export const deleteGoal = async (req: CustomRequest, res: express.Response) => {
  try {
    // Find the goal by its ID
    const foundGoal = await GoalModel.findById(req.params.id);

    if (!foundGoal) {
      return res.status(404).json({ message: "Goal not found" });
    }

    // Check if the user making the request is authorized to delete the goal
    if (!foundGoal.user || !foundGoal.user.equals(req.user?.id)) {
      return res.status(403).json({ message: "User not authorized to delete this goal" });
    }

    // Delete the goal
    const deletedGoal = await GoalModel.findByIdAndDelete(req.params.id);

    if (!deletedGoal) {
      return res.status(500).json({ message: "Failed to delete the goal" });
    }

    // Respond with success and the deleted goal's ID
    res.status(200).json({ message: "Goal deleted", id: deletedGoal._id });
  } catch (error) {
    console.log("Something went wrong...", error);
    res.status(500).json({ message: "Server error" });
  }
};