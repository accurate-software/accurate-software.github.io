import { ObjectsFakeRepository } from '../../domain/repositories/fakes/ObjectsFakeRepository';
import { CreateObjectService } from '../CreateObjectService';
import { ListAvaliableObjectService } from '../ListAvaliableObjectService';

let objectsFakeRepository: ObjectsFakeRepository;
let createObjectService: CreateObjectService;
let listAvaliableObject: ListAvaliableObjectService;

enum TypeEnum {
  Found = 'Perdido',
  Lost = 'Achado',
}

describe('List Objetcs', () => {
  beforeEach(() => {
    objectsFakeRepository = new ObjectsFakeRepository();
    listAvaliableObject = new ListAvaliableObjectService(objectsFakeRepository);
    createObjectService = new CreateObjectService(objectsFakeRepository);
  });

  it('should be able to list all available objetcs', async () => {
    const objectAvailable = await createObjectService.execute({
      name: 'Object',
      comments: 'Comments',
      type: TypeEnum.Found,
      category_id: 'category_id',
    });

    const objetcs = await listAvaliableObject.execute({});

    expect(objetcs).toEqual([objectAvailable]);
  });

  it('should be able to list all available objetcs by name', async () => {
    const objectAvailable = await createObjectService.execute({
      name: 'Object',
      comments: 'Comments',
      type: TypeEnum.Found,
      category_id: 'category_id',
    });

    const objetcs = await listAvaliableObject.execute({
      name: 'Object',
    });

    expect(objetcs).toEqual([objectAvailable]);
  });

  it('should be able to list all available objetcs by category', async () => {
    const objectAvailable = await createObjectService.execute({
      name: 'Object',
      comments: 'Comments',
      type: TypeEnum.Found,
      category_id: 'category_id',
    });

    const objetcs = await listAvaliableObject.execute({
      category_id: 'category_id',
    });

    expect(objetcs).toEqual([objectAvailable]);
  });
});
