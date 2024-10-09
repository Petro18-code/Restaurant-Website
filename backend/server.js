import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';
import morgan from 'morgan';
import helmet from 'helmet';
import userRoutes from './routes/userRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import authRoutes from './routes/authenticationRoutes.js'; 
import passport from 'passport';
import googleStrategy from './config/passport.config.js';
import reviewRoutes from './routes/reviewRoutes.js';
import reservationRoutes from './routes/reservationRoutes.js';

const port = process.env.PORT || 5001;
const server = express();

passport.use('google', googleStrategy);

mongoose.connect(process.env.MONGODB_CONNECTION_URL)
  .then(() => console.log('MongoDB connected!'))
  .catch((err) => console.log(err));

server.use(express.json());
server.use(cors());
server.use(morgan('dev'));
server.use(helmet());

server.use('/api/users', userRoutes);
server.use('/api/admin', adminRoutes);
server.use('/api/auth', authRoutes);
server.use('/api/review', reviewRoutes);
server.use('/api/reservation', reservationRoutes);

server.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});