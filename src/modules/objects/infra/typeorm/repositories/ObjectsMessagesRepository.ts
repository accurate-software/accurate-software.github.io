import { IObjectMessage } from '@modules/objects/domain/models/IObjectMessage';
import {
  ICreateObjectMessageDTO,
  IObjectsMessagesRepository,
} from '@modules/objects/domain/repositories/IObjectsMessagesRepository';
import { getRepository, Repository } from 'typeorm';
import { ObjectMessage } from '../entities/ObjectMessage';

class ObjectsMessagesRepository implements IObjectsMessagesRepository {
  private repository: Repository<ObjectMessage>;

  constructor() {
    this.repository = getRepository(ObjectMessage);
  }

  async create({
    user_id,
    object_id,
    message,
  }: ICreateObjectMessageDTO): Promise<IObjectMessage> {
    const objectMessage = this.repository.create({
      user_id,
      object_id,
      message,
    });

    await this.repository.save(objectMessage);

    return objectMessage;
  }
}

export { ObjectsMessagesRepository };
