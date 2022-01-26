import { CategoriesFakeRepository } from '../../domain/repositories/fakes/CategoriesFakeRepository';
import { CreateCategoryService } from '../CreateCategoryService';

let createCategoryService: CreateCategoryService;
let categoriesFakeRepository: CategoriesFakeRepository;

describe('Delete Category', () => {
  beforeEach(() => {
    categoriesFakeRepository = new CategoriesFakeRepository();
    createCategoryService = new CreateCategoryService(categoriesFakeRepository);
  });

  it('should be able to delete a category', async () => {
    const category = await createCategoryService.execute({
      name: 'Category',
      description: 'Category Description',
    });

    const deleteCategory = await categoriesFakeRepository.findByDelete(
      category.id,
    );

    expect(deleteCategory).toBeUndefined();
  });
});
