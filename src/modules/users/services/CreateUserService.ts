import { inject, injectable } from 'tsyringe';
import { ICreateUserDTO } from '../domain/dtos/ICreateUserDTO';
import { IUsersRepository } from '../domain/repositories/IUsersRepository';

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({ name, email, password }: ICreateUserDTO): Promise<void> {
    await this.usersRepository.create({
      name,
      email,
      password,
    });
  }
}

export { CreateUserService };
