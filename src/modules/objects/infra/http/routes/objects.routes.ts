import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';
import { Router } from 'express';
import { CreateObjectController } from '../controllers/CreateObjectController';
import { ListAllObjectsController } from '../controllers/ListAllObjectsController';

const objectsRoutes = Router();

const createObjectController = new CreateObjectController();
const listAllObjectsController = new ListAllObjectsController();

objectsRoutes.post('/', ensureAuthenticated, createObjectController.handle);

objectsRoutes.get('/', listAllObjectsController.handle);

export { objectsRoutes };
