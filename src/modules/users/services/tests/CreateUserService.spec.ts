//import { AppError } from '../../../../shared/errors/AppError';
import { UsersFakeRepository } from '../../domain/repositories/fakes/UsersFakeRepository';
import { CreateUserService } from '../CreateUserService';
import { HashProviderFakeRepository } from '../../providers/fakes/HashProviderFakeRepository';

let createUserService: CreateUserService;
let usersFakeRepository: UsersFakeRepository;
let hashProviderFakeRepository: HashProviderFakeRepository;

describe('Create User', () => {
  beforeEach(() => {
    usersFakeRepository = new UsersFakeRepository();
    hashProviderFakeRepository = new HashProviderFakeRepository();
    createUserService = new CreateUserService(
      usersFakeRepository,
      hashProviderFakeRepository,
    );
  });

  it('should be able to create a user', async () => {
    const createUser = await createUserService.execute({
      name: 'Nome Test',
      email: 'test@test.com',
      password: '123456',
    });

    expect(createUser).toHaveProperty('id');
  });

  //it('should not be able to create a new category with name exists', async () => {});
});
