import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IUsersRepository } from '../domain/repositories/IUsersRepository';
import { IUsersTokensRepository } from '../domain/repositories/IUsersTokensRepository';
import path from 'path';

interface IResqust {
  email: string;
}

@injectable()
class SendForgotPasswordEmailService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('UsersTokensRepository')
    private usersTokensRepository: IUsersTokensRepository,
  ) {}

  async execute({ email }: IResqust): Promise<void> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('User not found.', 404);
    }

    const { token } = await this.usersTokensRepository.generateToken(user.id);

    const forgotPasswordTamplete = path.resolve(
      __dirname,
      '..',
      'views',
      'forgot_password.hbs',
    );
  }
}

export { SendForgotPasswordEmailService };
