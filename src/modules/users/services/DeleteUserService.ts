import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IUsersRepository } from '../domain/repositories/IUsersRepository';

interface IRequest {
  id: string;
}

@injectable()
class DeleteUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({ id }: IRequest): Promise<void> {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new AppError('User not found.');
    }

    await this.usersRepository.findByDelete(id);
  }
}

export { DeleteUserService };
