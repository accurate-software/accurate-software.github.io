import { ICreateCategoryDTO } from '../dtos/ICreateCategoryDTO';
import { ICategory } from '../models/ICategory';

interface ICategoriesRepository {
  create(data: ICreateCategoryDTO): Promise<ICategory>;
  findByName(name: string): Promise<ICategory | undefined>;
  list(): Promise<ICategory[]>;
  findById(id: string): Promise<ICategory | undefined>;
  findByDelete(id: string): Promise<void>;
  save(category: ICategory): Promise<ICategory>;
}

export { ICategoriesRepository };
