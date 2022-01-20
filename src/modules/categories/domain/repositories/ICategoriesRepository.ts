import { ICreateCategoryDTO } from '../dtos/ICreateCategoryDTO';
import { ICategory } from '../models/ICategory';

interface ICategoriesRepository {
  create(data: ICreateCategoryDTO): Promise<void>;
  findByName(name: string): Promise<ICategory | undefined>;
}

export { ICategoriesRepository };
