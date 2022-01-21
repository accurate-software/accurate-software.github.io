import { AppError } from '../../../../shared/errors/AppError';
import { CategoriesFakeRepository } from '../../domain/repositories/fakes/CategoriesFakeRepository';
import { CreateCategoryService } from '../CreateCategoryService';

let createCategoryService: CreateCategoryService;
let categoriesFakeRepository: CategoriesFakeRepository;

describe('Create Category', () => {
  beforeEach(() => {
    categoriesFakeRepository = new CategoriesFakeRepository();
    createCategoryService = new CreateCategoryService(categoriesFakeRepository);
  });

  it('should be able to create a category', async () => {
    const category = await createCategoryService.execute({
      name: 'Category',
      description: 'Category Description',
    });

    expect(category).toHaveProperty('id');
  });

  it('should not be able to create a new category with name exists', async () => {
    const category = {
      name: 'Category',
      description: 'Category Description',
    };

    await createCategoryService.execute({
      name: category.name,
      description: category.description,
    });

    await expect(
      createCategoryService.execute({
        name: category.name,
        description: category.description,
      }),
    ).rejects.toEqual(new AppError('This category already exists.'));
  });
});
