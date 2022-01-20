import ensureAdmin from '@shared/infra/http/middlewares/ensureAdmin';
import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';
import { celebrate, Segments, Joi } from 'celebrate';
import { Router } from 'express';
import { ListCategoriesController } from '../controllers/ListCategoriesController';
import { CreateCategoryController } from '../controllers/CreateCategoryController';

const categoriesRoutes = Router();

const createCategoryController = new CreateCategoryController();
const listCategoriesController = new ListCategoriesController();

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

categoriesRoutes.get(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  listCategoriesController.handle,
);

export { categoriesRoutes };
