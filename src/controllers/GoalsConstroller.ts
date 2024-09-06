
import express from 'express';

export const getGoals = async (req:express.Request,res:express.Response) => {
    res.status(200).json("This is Get Goal API");
}
export const createGoal = async (req:express.Request,res:express.Response) => {
    console.log(req.body)
    res.status(200).json("This is Create Goal API")
}
export const updateGoal = async (req:express.Request,res:express.Response) => {
    res.status(200).json("This is Update Goal API")
}
export const deleteGoal = async (req:express.Request,res:express.Response) => {
    res.status(200).json("This is Delete Goal API")
    
}