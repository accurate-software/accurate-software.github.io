import { CreateObjectService } from '@modules/objects/services/CreateObjectService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class CreateObjectController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, comments, type, category_id } = request.body;
    const { id } = request.user;

    const createObjectService = container.resolve(CreateObjectService);

    const createObject = await createObjectService.execute({
      name,
      comments,
      type,
      category_id,
      user_id: id,
    });

    return response.status(201).json(createObject);
  }
}

export { CreateObjectController };
