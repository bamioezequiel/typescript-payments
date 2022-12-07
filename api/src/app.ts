import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import authRoutes from './routes/auth.routes';
import userRoutes from './routes/user.routes';
import coinRoutes from './routes/coin.routes';

const app = express();

app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ['POST', 'GET'],
    credentials: true
}));

app.use(express.json());
app.use(morgan('dev'));
app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/coin', coinRoutes);

export default app;