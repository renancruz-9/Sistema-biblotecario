import 'dotenv/config';
import express from 'express';
import userRoutes from './routes/userRoutes.js';
import mysql from 'mysql2/promise';
import livrosRoutes from './routes/livrosRoutes.js';
import authRoutes from './routes/authRoutes.js';
import autorRoutes from './routes/autorRoutes.js';
import emprestimoRoutes from './routes/emprestimoRoutes.js';

const app = express();
	
app.use(express.json());
app.use('/users', userRoutes);
app.use('/autor', autorRoutes);
app.use('/auth', authRoutes);
app.use('/livros', livrosRoutes);
app.use('/emprestimo', emprestimoRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT}`);
});
