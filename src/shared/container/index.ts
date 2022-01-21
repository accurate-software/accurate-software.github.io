import { IUsersRepository } from '@modules/users/domain/repositories/IUsersRepository';
import { UsersRepository } from '@modules/users/infra/typeorm/repositories/UsersRepository';

import { container } from 'tsyringe';
import '@modules/users/providers';

import { UserTokensRepository } from '@modules/users/infra/typeorm/repositories/UserTokensRepository';
import { IUserTokensRepository } from '@modules/users/domain/repositories/IUsersTokensRepository';
import { ICategoriesRepository } from '@modules/categories/domain/repositories/ICategoriesRepository';
import { CategoriesRepository } from '@modules/categories/infra/typeorm/repositories/CategoriesRepository';
import { IObjectsRepository } from '@modules/objects/domain/repositories/IObjectsRepository';
import { ObjectsRepository } from '@modules/objects/infra/typeorm/repositories/ObjectsRepository';
import { IObjectsImagesRepository } from '@modules/objects/domain/repositories/IObjectsImagesRepository';
import { ObjectsImagesRepository } from '@modules/objects/infra/typeorm/repositories/ObjectsImagesRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IUserTokensRepository>(
  'UserTokensRepository',
  UserTokensRepository,
);

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository,
);

container.registerSingleton<IObjectsRepository>(
  'ObjectsRepository',
  ObjectsRepository,
);

container.registerSingleton<IObjectsImagesRepository>(
  'ObjectsImagesRepository',
  ObjectsImagesRepository,
);
