import express from 'express'
import { deleteGoal, getGoals, updateGoal,createGoal } from '../controllers/GoalsConstroller';
import protect from '../middlewares/authMiddleware';

const router = express.Router();

router.post('/goals',protect,createGoal)

router.get('/goals',protect,getGoals)
router.put('/goals/:id',protect,updateGoal)
router.delete('/goals/:id',protect,deleteGoal)

export default router;