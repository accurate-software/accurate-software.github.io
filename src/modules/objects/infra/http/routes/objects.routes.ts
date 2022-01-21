import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';
import { Router } from 'express';
import multer from 'multer';
import { CreateObjectController } from '../controllers/CreateObjectController';
import { ListAllObjectsController } from '../controllers/ListAllObjectsController';
import { UploadObjectImageController } from '../controllers/UploadObjectImageController';
import uploadConfig from '@config/upload';

const objectsRoutes = Router();

const createObjectController = new CreateObjectController();
const listAllObjectsController = new ListAllObjectsController();
const uploadObjectImageController = new UploadObjectImageController();

const uploadImages = multer(uploadConfig);

objectsRoutes.post('/', ensureAuthenticated, createObjectController.handle);

objectsRoutes.get('/', listAllObjectsController.handle);

objectsRoutes.post(
  '/images/:id',
  ensureAuthenticated,
  uploadImages.array('images'),
  uploadObjectImageController.handle,
);

export { objectsRoutes };
