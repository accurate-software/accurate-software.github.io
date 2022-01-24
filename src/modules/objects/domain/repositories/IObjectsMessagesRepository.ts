import { IObjectMessage } from '../models/IObjectMessage';

interface ICreateObjectMessageDTO {
  user_id: string;
  object_id: string;
  message: string;
}

interface IObjectsMessagesRepository {
  create({
    user_id,
    object_id,
    message,
  }: ICreateObjectMessageDTO): Promise<IObjectMessage>;
}

export { IObjectsMessagesRepository, ICreateObjectMessageDTO };
