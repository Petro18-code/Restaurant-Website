import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';
import morgan from 'morgan';
import helmet from 'helmet';
import authenticationRoutes from './routes/authenticationRoutes.js';
import reservationRoutes from './routes/reservationRoutes.js';
import reviewRoutes from './routes/reviewRoutes.js';

const port = process.env.PORT || 5001;
const server = express();

await mongoose.connect(process.env.MONGODB_CONNECTION_URL)
.then(() => console.log('MongoDB connected!'))
.catch((err) => console.log(err));

server.use(express.json());
server.use(cors());
server.use(morgan('dev'));
server.use(helmet());
server.use('/auth', authenticationRoutes); // Authentication routes (register, login)
server.use('/reservations', reservationRoutes); // Reservation routes
server.use('/reviews', reviewRoutes);

server.listen(port, () => {
    console.log(`server is running at port: ${port}`);
})