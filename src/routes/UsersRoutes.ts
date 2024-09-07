
import express from 'express'

const userRouter = express.Router();
import { createUser,LoginUser,getMe } from '../controllers/UsersControllers';
userRouter.post('/',createUser);
userRouter.post('/login',LoginUser);
userRouter.get('/me',getMe);



export default userRouter;