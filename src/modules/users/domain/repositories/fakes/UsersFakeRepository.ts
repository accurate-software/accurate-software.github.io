import { User } from '../../../infra/typeorm/entities/User';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IUser } from '../../models/IUser';
import { IUsersRepository } from '../IUsersRepository';

class UsersFakeRepository implements IUsersRepository {
  users: User[] = [];

  async findByDelete(id: string): Promise<void> {
    this.users.find(user => user.id === id);
  }

  async save(user: IUser): Promise<IUser> {
    const findIndex = this.users.findIndex(
      findIndex => findIndex.id === user.id,
    );

    this.users[findIndex] = user;

    return user;
  }

  async findAll(): Promise<IUser[]> {
    const users = this.users;

    return users;
  }

  async create({
    name,
    email,
    telephone,
    password,
  }: ICreateUserDTO): Promise<IUser> {
    const create = new User();

    Object.assign(create, {
      name,
      email,
      telephone,
      password,
    });

    this.users.push(create);

    return create;
  }

  async findByEmail(email: string): Promise<IUser | undefined> {
    const user = this.users.find(user => user.email === email);

    return user;
  }

  async findById(id: string): Promise<IUser | undefined> {
    const user = this.users.find(user => user.id === id);

    return user;
  }
}

export { UsersFakeRepository };
