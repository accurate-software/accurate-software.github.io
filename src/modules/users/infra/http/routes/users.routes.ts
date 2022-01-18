import { celebrate, Segments, Joi } from 'celebrate';
import { Router } from 'express';
import { CreateUserController } from '../controllers/CreateUserController';

const usersRoutes = Router();

const createUserController = new CreateUserController();

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

export { usersRoutes };
