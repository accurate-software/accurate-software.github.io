import { ObjectLostFound } from '../../../infra/typeorm/entities/ObjectLostFound';
import { ICreateObjectDTO } from '../../dtos/ICreateObjectDTO';
import { IObject } from '../../models/IObject';
import { IObjectsRepository } from '../IObjectsRepository';

class ObjectsFakeRepository implements IObjectsRepository {
  objects: ObjectLostFound[] = [];

  async create({
    name,
    comments,
    type: TypeEnum,
    category_id,
  }: ICreateObjectDTO): Promise<IObject> {
    const object = new ObjectLostFound();

    Object.assign(object, {
      name,
      comments,
      type: TypeEnum,
      category_id,
    });

    this.objects.push(object);

    return object;
  }

  async findAll(): Promise<IObject[]> {
    const objects = this.objects;

    return objects;
  }

  async findAvaliable(name?: string, category_id?: string): Promise<IObject[]> {
    let availableObjects = this.objects.filter(object => object.available);

    if (!name && !category_id) return availableObjects;

    availableObjects = availableObjects.filter(object => {
      if (object.name === name) return true;
      if (object.category_id === category_id) return true;

      return false;
    });

    return availableObjects;
  }
}

export { ObjectsFakeRepository };
