import { ListCategoriesService } from '@modules/categories/services/ListCategoriesService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class ListCategoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listCategories = container.resolve(ListCategoriesService);

    const categories = await listCategories.execute();

    return response.json(categories);
  }
}

export { ListCategoriesController };
