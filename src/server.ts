import express, { Router } from 'express'
import dotenv from 'dotenv'
import goalRouter from './routes/GoalsRoutes';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5500;

// Middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))



app.use('/api/', goalRouter)

app.listen(PORT,()=>{
    console.log('The server is runnung on the Port : ', PORT)
})