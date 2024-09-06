import express from 'express'
import { deleteGoal, getGoals, updateGoal,createGoal } from '../controllers/GoalsConstroller';


const router = express.Router();

router.post('/goals',createGoal)

router.get('/goals',getGoals)
router.put('/goals/:id',updateGoal)
router.delete('/goals/:id',deleteGoal)

export default router;