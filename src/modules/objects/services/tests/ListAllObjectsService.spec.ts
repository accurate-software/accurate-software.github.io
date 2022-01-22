import { ObjectsFakeRepository } from '../../domain/repositories/fakes/ObjectsFakeRepository';
import { CreateObjectService } from '../CreateObjectService';
import { ListAllObjectsService } from '../ListAllObjectsService';

let listAllObjectsService: ListAllObjectsService;
let objectsFakeRepository: ObjectsFakeRepository;
let createObjectService: CreateObjectService;

enum TypeEnum {
  Found = 'Perdido',
  Lost = 'Achado',
}

describe('List Objetcs', () => {
  beforeEach(() => {
    objectsFakeRepository = new ObjectsFakeRepository();
    listAllObjectsService = new ListAllObjectsService(objectsFakeRepository);
    createObjectService = new CreateObjectService(objectsFakeRepository);
  });

  it('should be able to list all objetcs', async () => {
    const object = await createObjectService.execute({
      name: 'Object',
      comments: 'Comments',
      type: TypeEnum.Found,
      category_id: 'Category',
    });

    const objetcs = await listAllObjectsService.execute();

    expect(objetcs).toEqual([object]);
  });
});
