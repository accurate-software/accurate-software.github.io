import { celebrate, Segments, Joi } from 'celebrate';
import { Router } from 'express';
import { CreateSessionController } from '../controllers/CreateSessionController';

const sessionsRoutes = Router();

const createSessionController = new CreateSessionController();

sessionsRoutes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().required().email(),
      password: Joi.string().required().min(6).max(18),
    },
  }),
  createSessionController.handle,
);

export { sessionsRoutes };
