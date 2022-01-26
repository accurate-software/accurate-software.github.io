import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';
import { Router } from 'express';
import multer from 'multer';
import { CreateObjectController } from '../controllers/CreateObjectController';
import { ListAllObjectsController } from '../controllers/ListAllObjectsController';
import { UploadObjectImageController } from '../controllers/UploadObjectImageController';
import uploadConfig from '@config/upload';
import { ListAvaliableObjectController } from '../controllers/ListAvaliableObjectController';
import { celebrate, Joi, Segments } from 'celebrate';
import { CreateObjectMessageController } from '../controllers/CreateObjectMessageController';
import ensureAdmin from '@shared/infra/http/middlewares/ensureAdmin';

const objectsRoutes = Router();

const createObjectController = new CreateObjectController();
const listAllObjectsController = new ListAllObjectsController();
const uploadObjectImageController = new UploadObjectImageController();
const listAvaliableObjectController = new ListAvaliableObjectController();
const createObjectMessageController = new CreateObjectMessageController();

const uploadImages = multer(uploadConfig);

objectsRoutes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      comments: Joi.string(),
      type: Joi.string().required(),
      category_id: Joi.string().required().uuid(),
    },
  }),
  ensureAuthenticated,
  createObjectController.handle,
);

objectsRoutes.get('/', listAllObjectsController.handle);

objectsRoutes.get('/available', listAvaliableObjectController.handle);

objectsRoutes.post(
  '/images/:id',
  ensureAuthenticated,
  uploadImages.array('images'),
  uploadObjectImageController.handle,
);

objectsRoutes.post(
  '/message',
  ensureAuthenticated,
  ensureAdmin,
  celebrate({
    [Segments.BODY]: {
      user_id: Joi.string().required().uuid(),
      object_id: Joi.string().required().uuid(),
      message: Joi.string().required(),
    },
  }),
  createObjectMessageController.handle,
);

export { objectsRoutes };
