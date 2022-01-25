import { ObjectsFakeRepository } from '../../../objects/domain/repositories/fakes/ObjectsFakeRepository';
import { CreateObjectService } from '../CreateObjectService';

let createObjectService: CreateObjectService;
let objectsFakeRepository: ObjectsFakeRepository;

enum TypeEnum {
  Found = 'Perdido',
  Lost = 'Achado',
}

describe('Create Object', () => {
  beforeEach(() => {
    objectsFakeRepository = new ObjectsFakeRepository();
    createObjectService = new CreateObjectService(objectsFakeRepository);
  });

  it('should be able to create a category', async () => {
    const object = await createObjectService.execute({
      name: 'Object',
      comments: 'Comments',
      type: TypeEnum.Found,
      user_id: 'user_id',
      category_id: 'Category',
    });

    expect(object).toHaveProperty('id');
  });
});
