import { inject, injectable } from 'tsyringe';
import { ICategory } from '../domain/models/ICategory';
import { ICategoriesRepository } from '../domain/repositories/ICategoriesRepository';

@injectable()
class ListCategoriesService {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,
  ) {}

  async execute(): Promise<ICategory[]> {
    const categories = await this.categoriesRepository.list();

    return categories;
  }
}

export { ListCategoriesService };
