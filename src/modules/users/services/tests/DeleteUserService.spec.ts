import { UsersFakeRepository } from '../../domain/repositories/fakes/UsersFakeRepository';
import { HashProviderFakeRepository } from '../../providers/fakes/HashProviderFakeRepository';
import { CreateUserService } from '../CreateUserService';

let createUserService: CreateUserService;
let hashProviderFakeRepository: HashProviderFakeRepository;
let usersFakeRepository: UsersFakeRepository;

describe('Delete User', () => {
  beforeEach(() => {
    usersFakeRepository = new UsersFakeRepository();
    hashProviderFakeRepository = new HashProviderFakeRepository();
    createUserService = new CreateUserService(
      usersFakeRepository,
      hashProviderFakeRepository,
    );
  });

  it('should be able to delete a user', async () => {
    const user = await createUserService.execute({
      name: 'Nome Test',
      email: 'test@test.com',
      password: '123456',
    });

    const deleteUser = await usersFakeRepository.findByDelete(user.id);

    expect(deleteUser).toBeUndefined();
  });
});
