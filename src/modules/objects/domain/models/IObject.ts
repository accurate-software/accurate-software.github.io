import { Category } from '@modules/categories/infra/typeorm/entities/Category';
import { TypeEnum } from '@modules/objects/infra/typeorm/entities/TypeEnum';
import { User } from '@modules/users/infra/typeorm/entities/User';

interface IObject {
  id: string;
  name: string;
  comments: string;
  available: boolean;
  type: TypeEnum;
  category_id: string;
  category: Category;
  user_id: string;
  user: User;
  created_at: Date;
  updated_at: Date;
}

export { IObject };
