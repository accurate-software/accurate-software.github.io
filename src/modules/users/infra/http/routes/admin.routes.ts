import ensureAdmin from '@shared/infra/http/middlewares/ensureAdmin';
import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';

import { Router } from 'express';
import { DeleteUserController } from '../controllers/DeleteUserController';

import { ListUserController } from '../controllers/ListUserController';

const adminRoutes = Router();

const listUserController = new ListUserController();
const deleteUserController = new DeleteUserController();

adminRoutes.get(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  listUserController.handle,
);

adminRoutes.delete(
  '/:id',
  ensureAuthenticated,
  ensureAdmin,
  deleteUserController.handle,
);

export { adminRoutes };
