import { User } from '@modules/users/infra/typeorm/entities/User';

interface IObjectMessage {
  id: string;
  user_id: string;
  object_id: string;
  user: User;
  message: string;
  created_at: Date;
  updated_at: Date;
}

export { IObjectMessage };
