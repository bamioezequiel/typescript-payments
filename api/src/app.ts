import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import authRoutes from './routes/user.routes';

const app = express();

app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ['POST', 'GET'],
    credentials: true
}));

app.use(express.json());
app.use(morgan('dev'));
app.use('/auth', authRoutes);

export default app;