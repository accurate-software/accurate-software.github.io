import { TypeEnum } from '@modules/objects/infra/typeorm/entities/TypeEnum';

interface ICreateObjectDTO {
  name: string;
  comments: string;
  type: TypeEnum;
  category_id: string;
}

export { ICreateObjectDTO };
