import { CreateObjectMessageService } from '@modules/objects/services/CreateObjectMessageService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class CreateObjectMessageController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { user_id, object_id, message } = request.body;

    const createObjectMessage = container.resolve(CreateObjectMessageService);

    const createMessage = await createObjectMessage.execute({
      user_id,
      object_id,
      message,
    });

    return response.status(201).json(createMessage);
  }
}

export { CreateObjectMessageController };
