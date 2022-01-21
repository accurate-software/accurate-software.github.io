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
});
