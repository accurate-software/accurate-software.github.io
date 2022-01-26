import { ListAvaliableObjectService } from '@modules/objects/services/ListAvaliableObjectService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class ListAvaliableObjectController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, category_id } = request.query;

    const listAvaliableObjectService = container.resolve(
      ListAvaliableObjectService,
    );

    const allAvailablesObjects = await listAvaliableObjectService.execute({
      name: name as string,

      category_id: category_id as string,
    });

    return response.json(allAvailablesObjects);
  }
}

export { ListAvaliableObjectController };
