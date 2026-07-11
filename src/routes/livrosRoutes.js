import { Router } from 'express';
import livroController from '../controllers/livrosController.js';

const livrosRoutes = Router();

livrosRoutes.post('/', livroController.criar);
livrosRoutes.get('/isbn/:isbn', livroController.selecionarPorIsbn);
livrosRoutes.put('/:id', livroController.atualizar);
livrosRoutes.delete('/:id', livroController.deletar);
livrosRoutes.get('/', livroController.selecionar);
livrosRoutes.get('/:id', livroController.selecionarPorId);

export default livrosRoutes;
