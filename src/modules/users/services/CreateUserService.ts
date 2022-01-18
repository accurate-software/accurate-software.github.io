import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { ICreateUserDTO } from '../domain/dtos/ICreateUserDTO';
import { IUsersRepository } from '../domain/repositories/IUsersRepository';
import { IHashProvider } from '../providers/models/IHashProvider';

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  async execute({ name, email, password }: ICreateUserDTO): Promise<void> {
    const emailExists = await this.usersRepository.findByEmail(email);

    if (emailExists) {
      throw new AppError('Email address already used.');
    }

    const hashdPassword = await this.hashProvider.generateHash(password);

    await this.usersRepository.create({
      name,
      email,
      password: hashdPassword,
    });
  }
}

export { CreateUserService };
