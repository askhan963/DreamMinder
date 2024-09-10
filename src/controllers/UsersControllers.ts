import express from 'express'
import userModel from '../models/UserModel';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
import { CustomRequest } from '../middlewares/authMiddleware';
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
        console.log("Plain Password: ", password)
        console.log("Hasheed Password: ", hashedPass)
        const newUser = await userModel.create({name,email,password: hashedPass})
        res.status(201).json({
            id : newUser._id,
            name: newUser.name,
            email: newUser.email,
            token: generateToken(newUser._id.toString())
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
                email: registeredUser.email,
                token: generateToken(registeredUser._id.toString())
            })
        }
        else{
            res.status(400).json({"message": "Wrong Creadientials..."})
        }
        
       } catch (error) {
        console.log("Something went Wrong...",error);
       }
}

export const getMe = async (req:CustomRequest,res:express.Response) => {
    try {
        const user = await userModel.findById(req.user.id);
        res.status(200).json({
            id: user?._id,
            name: user?.name,
            email: user?.email
        })
       } catch (error) {
        console.log("Something went Wrong...",error);
       }
}


const generateToken =  (id:string) => {
  return  jwt.sign({id}, process.env.JWT_SECRET || 'anc123', {
        expiresIn: '30d'
    })
}