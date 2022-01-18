import ensureAdmin from '@shared/infra/http/middlewares/ensureAdmin';
import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';

import { Router } from 'express';

import { ListUserController } from '../controllers/ListUserController';

const adminRoutes = Router();

const listUserController = new ListUserController();

adminRoutes.get(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  listUserController.handle,
);

export { adminRoutes };
