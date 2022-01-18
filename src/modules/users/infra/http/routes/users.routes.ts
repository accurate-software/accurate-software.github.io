import { celebrate, Segments, Joi } from 'celebrate';
import { Router } from 'express';
import { CreateUserController } from '../controllers/CreateUserController';
import { ListUserController } from '../controllers/ListUserController';

const usersRoutes = Router();

const createUserController = new CreateUserController();
const listUserController = new ListUserController();

usersRoutes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      password: Joi.string().required().min(6).max(18),
    },
  }),
  createUserController.handle,
);

usersRoutes.get('/', listUserController.handle);

export { usersRoutes };
