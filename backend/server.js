import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';
import morgan from 'morgan';
import helmet from 'helmet';
import userRoutes from './routes/userRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import authRoutes from './routes/authenticationRoutes.js'; 

const port = process.env.PORT || 5001;
const server = express();

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

server.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});