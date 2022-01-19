import { IUserToken } from '../models/IUserToken';

interface IUsersTokensRepository {
  findByToken(token: string): Promise<IUserToken | undefined>;
  generateToken(user_id: string): Promise<IUserToken>;
}

export { IUsersTokensRepository };
