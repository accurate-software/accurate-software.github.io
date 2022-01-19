import { ICreateUserDTO } from '../dtos/ICreateUserDTO';
import { IUser } from '../models/IUser';

interface IUsersRepository {
  findByDelete(id: string): Promise<void>;
  save(user: IUser): Promise<void>;
  findAll(): Promise<IUser[]>;
  create(data: ICreateUserDTO): Promise<IUser>;
  findByEmail(email: string): Promise<IUser | undefined>;
  findById(id: string): Promise<IUser | undefined>;
}

export { IUsersRepository };
