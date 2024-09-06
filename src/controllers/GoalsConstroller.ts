
import express from 'express';
import GoalModel from '../models/GoalsModel';
export const getGoals = async (req:express.Request,res:express.Response) => {
    try {
        const goals = await GoalModel.find();
        if(!goals){
            console.log("Noting found in DB...")
        }
    res.status(200).json(goals);

    } catch (error) {
        console.log("Something went Wrong...",error);
    }
}
export const createGoal = async (req:express.Request,res:express.Response) => {
    console.log(req.body)
    try {
        const newGoal = await GoalModel.create(req.body)
        if(newGoal){
            res.status(200).json(newGoal);
        }
    } catch (error) {
        console.log("Something went Wrong...",error);
    }
    
}
export const updateGoal = async (req:express.Request,res:express.Response) => {
    
    try {
       const foundGoal = await GoalModel.find({_id: req.params.id})
       if(foundGoal){
        const updatedGoal = await GoalModel.findByIdAndUpdate(req.params.id,req.body)
        res.status(200).json(updatedGoal)
       } 
    } catch (error) {
        console.log("Something went Wrong...",error);
    }
}
export const deleteGoal = async (req:express.Request,res:express.Response) => {
    try {
        const foundGoal = await GoalModel.find({_id: req.params.id})
        if(foundGoal){
         const updatedGoal = await GoalModel.findByIdAndDelete(req.params.id)
         res.status(200).json("Deleted ....")
        } 
     } catch (error) {
         console.log("Something went Wrong...",error);
     }
    
}