import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { UpdateCategoryService } from '@modules/categories/services/UpdateCategoryService';

class UpdateCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, description } = request.body;

    const updateCategoryService = container.resolve(UpdateCategoryService);

    await updateCategoryService.execute({
      id,
      name,
      description,
    });

    return response.send();
  }
}

export { UpdateCategoryController };
