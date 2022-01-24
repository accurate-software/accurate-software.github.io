import { IUsersRepository } from '@modules/users/domain/repositories/IUsersRepository';
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
    @inject('ObjectsMessagesRepository')
    private objectsMessagesRepository: IObjectsMessagesRepository,
  ) {}

  async execute({
    user_id,
    object_id,
    message,
  }: ICreateObjectMessageDTO): Promise<IObjectMessage> {
    const objectMessage = await this.objectsMessagesRepository.create({
      user_id,
      object_id,
      message,
    });

    return objectMessage;
  }
}

export { CreateObjectMessageService };
