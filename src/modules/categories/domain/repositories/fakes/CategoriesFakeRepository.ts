import { Category } from '../../../infra/typeorm/entities/Category';
import { ICreateCategoryDTO } from '../../dtos/ICreateCategoryDTO';
import { ICategory } from '../../models/ICategory';
import { ICategoriesRepository } from '../ICategoriesRepository';

class CategoriesFakeRepository implements ICategoriesRepository {
  categories: Category[] = [];

  async create({ name, description }: ICreateCategoryDTO): Promise<ICategory> {
    const create = new Category();

    Object.assign(create, {
      name,
      description,
    });

    this.categories.push(create);

    return create;
  }

  async findByName(name: string): Promise<ICategory | undefined> {
    const category = this.categories.find(category => category.name === name);

    return category;
  }

  async list(): Promise<ICategory[]> {
    const categories = this.categories;

    return categories;
  }

  async findById(id: string): Promise<ICategory | undefined> {
    const category = this.categories.find(category => category.id === id);

    return category;
  }

  async findByDelete(id: string): Promise<void> {
    this.categories.find(category => category.id === id);
  }

  async save(category: ICategory): Promise<ICategory> {
    const findIndex = this.categories.findIndex(
      findIndex => findIndex.id === category.id,
    );

    this.categories[findIndex] = category;

    return category;
  }
}

export { CategoriesFakeRepository };
