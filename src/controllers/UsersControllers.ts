import express from 'express'
import userModel from '../models/UserModel';
import bcrypt from 'bcrypt'
export const createUser = async (req:express.Request,res:express.Response) => {
   try {
    const {name,email,password} = req.body;
    const registeredUser = await userModel.find({email: email})
    if(registeredUser.length !== 0){
        res.status(400).json({"message": "User Already Exists..."})
    }
    else{
        const saltValue = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(password,saltValue)
        const newUser = await userModel.create({name,email,password: hashedPass})
        res.status(201).json({
            id : newUser._id,
            name: newUser.name,
            email: newUser.email
        })
    }
    
   } catch (error) {
    console.log("Something went Wrong...",error);
   }
}

export const LoginUser = async (req:express.Request,res:express.Response) => {
    try {
        const {email,password} = req.body;
        const registeredUser = await userModel.findOne({email})
        // const saltValue = await bcrypt.genSalt(10);
        if(registeredUser && (await bcrypt.compare(password,registeredUser.password || ''))){
            res.status(200).json({
                id : registeredUser._id,
                name: registeredUser.name,
                email: registeredUser.email
            })
        }
        else{
            res.status(400).json({"message": "Wrong Creadientials..."})
        }
        
       } catch (error) {
        console.log("Something went Wrong...",error);
       }
}

export const getMe = async (req:express.Request,res:express.Response) => {
    try {
        res.status(200).json({"message": "Get me user..."})
       } catch (error) {
        console.log("Something went Wrong...",error);
       }
}