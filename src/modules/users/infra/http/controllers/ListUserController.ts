import { ListUserService } from '@modules/users/services/ListUserService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class ListUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listUsers = container.resolve(ListUserService);

    const users = await listUsers.execute();

    return response.json(users);
  }
}

export { ListUserController };
