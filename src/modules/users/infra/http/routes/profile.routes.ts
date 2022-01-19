import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';
import { celebrate, Segments, Joi } from 'celebrate';
import { Router } from 'express';
import { UpdateProfileController } from '../controllers/UpdateProfileController';

const profileRoutes = Router();

const updateProfileController = new UpdateProfileController();

profileRoutes.put(
  '/',
  ensureAuthenticated,
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required().min(6).max(36),
      email: Joi.string().required().email(),
      old_password: Joi.string().min(6).max(18),
      password: Joi.string().optional().min(6).max(18),
      password_confirmation: Joi.string()
        .valid(Joi.ref('password'))
        .when('password', {
          is: Joi.exist(),
          then: Joi.required(),
        }),
    },
  }),
  updateProfileController.handle,
);

export { profileRoutes };
