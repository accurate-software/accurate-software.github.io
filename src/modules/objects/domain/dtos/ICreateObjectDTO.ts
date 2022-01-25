import { TypeEnum } from '@modules/objects/infra/typeorm/entities/TypeEnum';

interface ICreateObjectDTO {
  name: string;
  comments: string;
  type: TypeEnum;
  user_id: string;
  category_id: string;
}

export { ICreateObjectDTO };
