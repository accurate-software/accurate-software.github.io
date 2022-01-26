import { CreateSessionService } from '@modules/users/services/CreateSessionService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class CreateSessionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const createSessionService = container.resolve(CreateSessionService);

    const user = await createSessionService.execute({
      email,
      password,
    });

    return response.status(200).json(user);
  }
}

export { CreateSessionController };
