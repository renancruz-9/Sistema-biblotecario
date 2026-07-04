import 'dotenv/config';
import express from 'express';
import userRoutes from './routes/userRoutes.js';
import authRoutes from './routes/authRoutes.js';
import autorRoutes from './routes/AutorRoutes.js';

const port = 3000;

const app = express();
	
app.use(express.json());
app.use('/users', userRoutes);
app.use('/autor', autorRoutes);
app.use('/auth', authRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
