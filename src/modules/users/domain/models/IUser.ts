import { ObjectLostFound } from '@modules/objects/infra/typeorm/entities/ObjectLostFound';

interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  avatar: string;
  telephone: string;
  object_lost_found: ObjectLostFound[];
  isAdmin: boolean;
  created_at: Date;
  updated_at: Date;
}

export { IUser };
