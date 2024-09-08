import jwt from "jsonwebtoken";
import express from 'express';
import userModel from "../models/UserModel";

// Define an interface to represent the decoded token's structure
interface DecodedToken {
  id: string;
}
export interface CustomRequest extends express.Request {
    user?: any; 
  }

const protect = async (req: CustomRequest, res: express.Response, next: express.NextFunction) => {
  let token;

  try {
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];

      // Explicitly cast decoded to the expected interface
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'anc123') as DecodedToken;

      if (!decoded.id) {
        return res.status(401).json({ "message": "Not authorized, invalid token structure" });
      }

      req.user = await userModel.findById(decoded.id).select('-password');
      next();
    } else {
      res.status(401).json({ "message": "Not authorized, no token provided" });
    }
  } catch (error) {
    console.log(error);
    res.status(401).json({ "message": "Not authorized, token failed" });
  }
};

export default protect;
