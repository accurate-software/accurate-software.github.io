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
    const objects = await this.objectsRepository.findAll();

    return objects;
  }
}

export { ListAllObjectsService };
