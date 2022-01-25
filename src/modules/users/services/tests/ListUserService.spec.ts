import { UsersFakeRepository } from '../../domain/repositories/fakes/UsersFakeRepository';
import { HashProviderFakeRepository } from '../../providers/fakes/HashProviderFakeRepository';
import { CreateUserService } from '../CreateUserService';
import { ListUserService } from '../ListUserService';

let listUserService: ListUserService;
let createUserService: CreateUserService;
let usersFakeRepository: UsersFakeRepository;
let hashProviderFakeRepository: HashProviderFakeRepository;

describe('List Users', () => {
  beforeEach(() => {
    usersFakeRepository = new UsersFakeRepository();
    hashProviderFakeRepository = new HashProviderFakeRepository();
    createUserService = new CreateUserService(
      usersFakeRepository,
      hashProviderFakeRepository,
    );
    listUserService = new ListUserService(usersFakeRepository);
  });

  it('should be able to list all users', async () => {
    const user = await createUserService.execute({
      name: 'Nome Test',
      email: 'test@test.com',
      telephone: '99999999',
      password: '123456',
    });

    const users = await listUserService.execute();

    expect(users).toEqual([user]);
  });
});
