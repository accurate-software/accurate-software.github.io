import { CategoriesFakeRepository } from '../../domain/repositories/fakes/CategoriesFakeRepository';
import { ListCategoriesService } from '../ListCategoriesService';

let listCategoriesService: ListCategoriesService;
let categoriesFakeRepository: CategoriesFakeRepository;

describe('List Categories', () => {
  beforeEach(() => {
    categoriesFakeRepository = new CategoriesFakeRepository();
    listCategoriesService = new ListCategoriesService(categoriesFakeRepository);
  });

  it('should be able to list all categories', async () => {
    const category = await categoriesFakeRepository.create({
      name: 'Category',
      description: 'Category Description',
    });

    const categories = await listCategoriesService.execute();

    expect(categories).toEqual([category]);
  });
});
