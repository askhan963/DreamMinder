
import express from 'express'
import protect from '../middlewares/authMiddleware';
const userRouter = express.Router();
import { createUser,LoginUser,getMe } from '../controllers/UsersControllers';
userRouter.post('/',createUser);
userRouter.post('/login',LoginUser);
userRouter.get('/me',protect,getMe);



export default userRouter;