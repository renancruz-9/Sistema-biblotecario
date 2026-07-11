import { Router } from 'express';
import emprestimoController from '../controllers/emprestimoController.js';

const emprestimoRoutes = Router();

emprestimoRoutes.post('/', emprestimoController.criar);
emprestimoRoutes.put('/:id', emprestimoController.atualizar);
emprestimoRoutes.get('/', emprestimoController.selecionar);

export default emprestimoRoutes;
