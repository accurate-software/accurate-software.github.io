import { adminRoutes } from '@modules/users/infra/http/routes/admin.routes';
import { profileRoutes } from '@modules/users/infra/http/routes/profile.routes';
import { sessionsRoutes } from '@modules/users/infra/http/routes/sessions.routes';
import { usersRoutes } from '@modules/users/infra/http/routes/users.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/users', usersRoutes);
routes.use('/sessions', sessionsRoutes);
routes.use('/admin', adminRoutes);
routes.use('/profile', profileRoutes);

export { routes };
