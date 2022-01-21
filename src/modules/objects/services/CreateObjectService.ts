import { inject, injectable } from 'tsyringe';
import { ICreateObjectDTO } from '../domain/dtos/ICreateObjectDTO';
import { IObject } from '../domain/models/IObject';
import { IObjectsRepository } from '../domain/repositories/IObjectsRepository';

@injectable()
class CreateObjectService {
  constructor(
    @inject('ObjectsRepository')
    private objectsRepository: IObjectsRepository,
  ) {}

  async execute({
    name,
    comments,
    type,
    category_id,
  }: ICreateObjectDTO): Promise<IObject> {
    const object = this.objectsRepository.create({
      name,
      comments,
      type,
      category_id,
    });

    return object;
  }
}

export { CreateObjectService };
