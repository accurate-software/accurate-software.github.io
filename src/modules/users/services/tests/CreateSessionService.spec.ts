import { UsersFakeRepository } from '../../domain/repositories/fakes/UsersFakeRepository';
import { HashProviderFakeRepository } from '../../providers/fakes/HashProviderFakeRepository';
import { CreateSessionService } from '../CreateSessionService';
import { CreateUserService } from '../CreateUserService';

let createSessionService: CreateSessionService;
let createUserService: CreateUserService;
let usersFakeRepository: UsersFakeRepository;
let hashProviderFakeRepository: HashProviderFakeRepository;

describe('Create Session', () => {
  beforeEach(() => {
    usersFakeRepository = new UsersFakeRepository();
    hashProviderFakeRepository = new HashProviderFakeRepository();
    createSessionService = new CreateSessionService(
      usersFakeRepository,
      hashProviderFakeRepository,
    );

    createUserService = new CreateUserService(
      usersFakeRepository,
      hashProviderFakeRepository,
    );
  });

  it('should be able to authenticate', async () => {
    const user = {
      name: 'Nome Test',
      email: 'test@test.com',
      password: '123456',
    };

    await createUserService.execute(user);

    const result = await createSessionService.execute({
      email: user.email,
      password: user.password,
    });

    expect(result).toHaveProperty('token');
  });
});
