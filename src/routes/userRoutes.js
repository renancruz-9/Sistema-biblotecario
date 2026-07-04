import { Router } from 'express';
import userController from '../controllers/userController.js';
import authMiddleware from "../middlewares/authMiddleware.js";

const userRoutes = Router();

userRoutes.post('/', userController.criar);
userRoutes.put('/:id', authMiddleware, userController.atualizar);
userRoutes.delete('/:id', authMiddleware, userController.deletar);
userRoutes.get('/', userController.selecionar);
userRoutes.get('/:id', userController.selecionarPorId);

export default userRoutes;