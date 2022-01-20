import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { ICategoriesRepository } from '../domain/repositories/ICategoriesRepository';

interface IRequest {
  id: string;
}

@injectable()
class DeleteCategoryService {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,
  ) {}

  async execute({ id }: IRequest): Promise<void> {
    const category = await this.categoriesRepository.findById(id);

    if (!category) {
      throw new AppError('Category not found.', 404);
    }

    await this.categoriesRepository.findByDelete(id);
  }
}

export { DeleteCategoryService };
