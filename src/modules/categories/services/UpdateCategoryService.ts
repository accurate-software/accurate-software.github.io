import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { ICategoriesRepository } from '../domain/repositories/ICategoriesRepository';

interface IResqust {
  id: string;
  name: string;
  description: string;
}

@injectable()
class UpdateCategoryService {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,
  ) {}

  async execute({ id, name, description }: IResqust): Promise<void> {
    const category = await this.categoriesRepository.findById(id);

    if (!category) {
      throw new AppError('Category not found', 404);
    }

    const categoryName = await this.categoriesRepository.findByName(name);

    if (categoryName && name !== category.name) {
      throw new AppError('There is already one category with this name.');
    }

    category.name = name;
    category.description = description;

    await this.categoriesRepository.save(category);
  }
}

export { UpdateCategoryService };
