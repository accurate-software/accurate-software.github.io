import { celebrate, Segments, Joi } from 'celebrate';
import { Router } from 'express';
import { CreateUserController } from '../controllers/CreateUserController';
import uploadConfig from '@config/upload';
import multer from 'multer';
import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';
import { UpdateAvatarUserController } from '../controllers/UpdateAvatarUserController';

const usersRoutes = Router();

const createUserController = new CreateUserController();
const updateAvatarUserController = new UpdateAvatarUserController();

const upload = multer(uploadConfig);

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

usersRoutes.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  updateAvatarUserController.handle,
);

export { usersRoutes };
