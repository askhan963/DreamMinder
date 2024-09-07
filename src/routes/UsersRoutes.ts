
import express from 'express'

const userRoutes = express.Router();
import { createUser,LoginUser,getMe } from '../controllers/UsersControllers';
userRoutes.post('/users',createUser);
userRoutes.post('/users',LoginUser);
userRoutes.post('/me',getMe);



export default userRoutes;