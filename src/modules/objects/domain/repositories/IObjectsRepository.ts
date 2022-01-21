import { ICreateObjectDTO } from '../dtos/ICreateObjectDTO';
import { IObject } from '../models/IObject';

interface IObjectsRepository {
  create(data: ICreateObjectDTO): Promise<IObject>;
  findAll(): Promise<IObject[]>;
}

export { IObjectsRepository };
