import ensureAdmin from '@shared/infra/http/middlewares/ensureAdmin';
import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';
import { celebrate, Segments, Joi } from 'celebrate';
import { Router } from 'express';
import { CreateCategoryController } from '../controllers/CreateCategoryController';

const categoriesRoutes = Router();

const createCategoryController = new CreateCategoryController();

categoriesRoutes.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      description: Joi.string().required(),
    },
  }),
  createCategoryController.handle,
);

export { categoriesRoutes };
