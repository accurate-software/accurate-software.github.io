import { IUserToken } from '@modules/users/domain/models/IUserToken';
import { IUsersTokensRepository } from '@modules/users/domain/repositories/IUsersTokensRepository';
import { getRepository, Repository } from 'typeorm';
import { UserToken } from '../entities/UserToken';

class UserTokensRepository implements IUsersTokensRepository {
  private repository: Repository<UserToken>;

  constructor() {
    this.repository = getRepository(UserToken);
  }

  async findByToken(token: string): Promise<IUserToken | undefined> {
    const userToken = await this.repository.findOne({ token });

    return userToken;
  }

  async generateToken(user_id: string): Promise<IUserToken> {
    const userToken = this.repository.create({ user_id });

    await this.repository.save(userToken);

    return userToken;
  }
}

export { UserTokensRepository };
