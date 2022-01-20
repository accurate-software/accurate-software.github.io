import ensureAdmin from '@shared/infra/http/middlewares/ensureAdmin';
import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';
import { celebrate, Segments, Joi } from 'celebrate';
import { Router } from 'express';
import { ListCategoriesController } from '../controllers/ListCategoriesController';
import { CreateCategoryController } from '../controllers/CreateCategoryController';
import { DeleteCategoryController } from '../controllers/DeleteCategoryController';

const categoriesRoutes = Router();

const createCategoryController = new CreateCategoryController();
const listCategoriesController = new ListCategoriesController();
const deleteCategoryController = new DeleteCategoryController();

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

categoriesRoutes.delete(
  '/:id',
  ensureAuthenticated,
  ensureAdmin,
  deleteCategoryController.handle,
);

export { categoriesRoutes };
