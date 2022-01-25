import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IObjectMessage } from '../domain/models/IObjectMessage';
import {
  ICreateObjectMessageDTO,
  IObjectsMessagesRepository,
} from '../domain/repositories/IObjectsMessagesRepository';
import { IObjectsRepository } from '../domain/repositories/IObjectsRepository';

@injectable()
class CreateObjectMessageService {
  constructor(
    @inject('ObjectsRepository')
    private objectsRepository: IObjectsRepository,
    @inject('ObjectsMessagesRepository')
    private objectsMessagesRepository: IObjectsMessagesRepository,
  ) {}

  async execute({
    user_id,
    object_id,
    message,
  }: ICreateObjectMessageDTO): Promise<IObjectMessage> {
    const object = await this.objectsRepository.findById(object_id);

    if (!object) {
      throw new AppError('Object not found', 404);
    }

    const objectMessage = await this.objectsMessagesRepository.create({
      user_id,
      object_id,
      message,
    });

    return objectMessage;
  }
}

export { CreateObjectMessageService };
