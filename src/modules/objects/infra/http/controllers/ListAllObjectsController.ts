import { ListAllObjectsService } from '@modules/objects/services/ListAllObjectsService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class ListAllObjectsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listAllObjectsService = container.resolve(ListAllObjectsService);

    const objects = await listAllObjectsService.execute();

    return response.json(objects);
  }
}

export { ListAllObjectsController };
