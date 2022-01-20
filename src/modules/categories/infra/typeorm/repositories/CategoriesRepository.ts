import { ICreateCategoryDTO } from '@modules/categories/domain/dtos/ICreateCategoryDTO';
import { ICategory } from '@modules/categories/domain/models/ICategory';
import { ICategoriesRepository } from '@modules/categories/domain/repositories/ICategoriesRepository';
import { getRepository, Repository } from 'typeorm';
import { Category } from '../entities/Category';

class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  async list(): Promise<ICategory[]> {
    const categories = await this.repository.find();
    return categories;
  }

  async findByName(name: string): Promise<ICategory | undefined> {
    const category = await this.repository.findOne({ name });

    return category;
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const createCategory = this.repository.create({
      name,
      description,
    });

    await this.repository.save(createCategory);
  }
}

export { CategoriesRepository };
