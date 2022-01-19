import { ICreateUserDTO } from '@modules/users/domain/dtos/ICreateUserDTO';
import { IUser } from '@modules/users/domain/models/IUser';
import { IUsersRepository } from '@modules/users/domain/repositories/IUsersRepository';
import { getRepository, Repository } from 'typeorm';
import { User } from '../entities/User';

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async save(user: IUser): Promise<void> {
    await this.repository.save(user);
  }

  findAll(): Promise<IUser[]> {
    const users = this.repository.find();

    return users;
  }

  async create({ name, email, password }: ICreateUserDTO): Promise<IUser> {
    const createUser = this.repository.create({
      name,
      email,
      password,
    });

    await this.repository.save(createUser);

    return createUser;
  }

  async findByEmail(email: string): Promise<IUser | undefined> {
    const user = await this.repository.findOne({ email });

    return user;
  }

  async findById(id: string): Promise<IUser | undefined> {
    const user = await this.repository.findOne(id);

    return user;
  }
}

export { UsersRepository };
