import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'; // Import cors
import goalRouter from './routes/GoalsRoutes';
import userRouter from './routes/UsersRoutes';
import connectDb from './config/dB';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5500;

// connect to DB
connectDb();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Use CORS middleware
app.use(cors());  // Enable CORS for all routes

// Routes
app.use('/api/', goalRouter);
app.use('/api/users', userRouter);

// Start the server
app.listen(PORT, () => {
  console.log('The server is running on the Port:', PORT);
});
