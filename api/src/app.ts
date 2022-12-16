import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import authRoutes from './routes/auth.routes';
import userRoutes from './routes/user.routes';
import coinRoutes from './routes/coin.routes';
import paymentRoutes from './routes/payment.routes';
import storeRoutes from './routes/store.routes';

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
app.use('/payment', paymentRoutes);
app.use('/store', storeRoutes);

export default app;