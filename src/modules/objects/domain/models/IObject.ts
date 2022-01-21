import { Category } from '@modules/categories/infra/typeorm/entities/Category';
import { TypeEnum } from '@modules/objects/infra/typeorm/entities/TypeEnum';

interface IObject {
  id: string;
  name: string;
  comments: string;
  available: boolean;
  type: TypeEnum;
  user_id: string;
  category_id: string;
  category: Category;
  created_at: Date;
  updated_at: Date;
}

export { IObject };
