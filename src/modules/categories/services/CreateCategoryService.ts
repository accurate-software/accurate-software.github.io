import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { ICreateCategoryDTO } from '../domain/dtos/ICreateCategoryDTO';
import { ICategoriesRepository } from '../domain/repositories/ICategoriesRepository';

@injectable()
class CreateCategoryService {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,
  ) {}

  async execute({ name, description }: ICreateCategoryDTO): Promise<void> {
    const categoryExists = await this.categoriesRepository.findByName(name);

    if (categoryExists) {
      throw new AppError('This category already exists.');
    }

    this.categoriesRepository.create({
      name,
      description,
    });
  }
}

export { CreateCategoryService };
