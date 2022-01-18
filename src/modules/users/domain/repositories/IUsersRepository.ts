import { ICreateUserDTO } from '../dtos/ICreateUserDTO';
import { IUser } from '../models/IUser';

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
  findByEmail(email: string): Promise<IUser | undefined>;
  findById(id: string): Promise<IUser | undefined>;
}

export { IUsersRepository };
