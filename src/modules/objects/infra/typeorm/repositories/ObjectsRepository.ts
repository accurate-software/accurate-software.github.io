import { ICreateObjectDTO } from '@modules/objects/domain/dtos/ICreateObjectDTO';
import { IObject } from '@modules/objects/domain/models/IObject';
import { IObjectsRepository } from '@modules/objects/domain/repositories/IObjectsRepository';
import { getRepository, Repository } from 'typeorm';
import { ObjectLostFound } from '../entities/ObjectLostFound';

class ObjectsRepository implements IObjectsRepository {
  private repository: Repository<ObjectLostFound>;

  constructor() {
    this.repository = getRepository(ObjectLostFound);
  }

  async findById(id: string): Promise<IObject | undefined> {
    const object = await this.repository.findOne(id);

    return object;
  }

  async findAvaliable(name?: string, category_id?: string): Promise<IObject[]> {
    const objectsQuery = await this.repository
      .createQueryBuilder('c')
      .where('available = :available', { available: true });

    if (name) {
      objectsQuery.andWhere('name = :name', { name });
    }

    if (category_id) {
      objectsQuery.andWhere('category_id = :category_id', { category_id });
    }

    const objects = await objectsQuery.getMany();

    return objects;
  }

  async findAll(): Promise<IObject[]> {
    const objects = await this.repository.find();

    return objects;
  }

  async create({
    name,
    comments,
    type,
    user_id,
    category_id,
  }: ICreateObjectDTO): Promise<IObject> {
    const object = this.repository.create({
      name,
      comments,
      type,
      user_id,
      category_id,
    });

    await this.repository.save(object);

    return object;
  }

  async updateAvailable(id: string, available: boolean): Promise<void> {
    await this.repository
      .createQueryBuilder()
      .update()
      .set({ available })
      .where('id = :id')
      .setParameters({ id })
      .execute();
  }
}

export { ObjectsRepository };
