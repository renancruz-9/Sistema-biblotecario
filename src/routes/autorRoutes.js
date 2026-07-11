import { Router } from 'express';
import autorController from '../controllers/autorController.js';


const autorRoutes = Router();

autorRoutes.post('/', autorController.criar);
autorRoutes.put('/:id', autorController.atualizar);
autorRoutes.delete('/:id', autorController.deletar);
autorRoutes.get('/', autorController.selecionar);
autorRoutes.get('/:id', autorController.selecionarPorId);

export default autorRoutes;