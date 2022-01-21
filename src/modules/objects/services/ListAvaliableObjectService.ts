import { inject, injectable } from 'tsyringe';
import { IObject } from '../domain/models/IObject';
import { IObjectsRepository } from '../domain/repositories/IObjectsRepository';

interface IRequest {
  name?: string;
  category_id?: string;
}

@injectable()
class ListAvaliableObjectService {
  constructor(
    @inject('ObjectsRepository')
    private objectsRepository: IObjectsRepository,
  ) {}

  async execute({ name, category_id }: IRequest): Promise<IObject[]> {
    const objects = await this.objectsRepository.findAvaliable(
      name,
      category_id,
    );

    return objects;
  }
}

export { ListAvaliableObjectService };
