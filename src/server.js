import 'dotenv/config';
import express from 'express';
import mysql from 'mysql2/promise';
import livrosRoutes from './routes/livrosRoutes.js';
import authRoutes from './routes/authRoutes.js';

const port = 3000;

const app = express();
	
app.use(express.json());
app.use('/livros', livrosRoutes);


app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
