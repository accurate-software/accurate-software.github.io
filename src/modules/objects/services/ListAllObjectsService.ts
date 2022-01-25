import { RedisCache } from '@shared/cache/RedisCache';
import { inject, injectable } from 'tsyringe';
import { IObject } from '../domain/models/IObject';
import { IObjectsRepository } from '../domain/repositories/IObjectsRepository';

@injectable()
class ListAllObjectsService {
  constructor(
    @inject('ObjectsRepository')
    private objectsRepository: IObjectsRepository,
  ) {}

  async execute(): Promise<IObject[]> {
    const redisCache = new RedisCache();

    let objects = await redisCache.recover<IObject[]>(
      'api-lost-and-found_OBJECTS_LIST',
    );

    if (!objects) {
      objects = await this.objectsRepository.findAll();

      await redisCache.save('api-lost-and-found_OBJECTS_LIST', objects);
    }

    return objects;
  }
}

export { ListAllObjectsService };
