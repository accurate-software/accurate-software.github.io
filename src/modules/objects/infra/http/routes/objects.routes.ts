import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';
import { Router } from 'express';
import { CreateObjectController } from '../controllers/CreateObjectController';

const objectsRoutes = Router();

const createObjectController = new CreateObjectController();

objectsRoutes.post('/', ensureAuthenticated, createObjectController.handle);

export { objectsRoutes };
