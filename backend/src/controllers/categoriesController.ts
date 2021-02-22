import {Request, Response} from 'express';
import knex from '../database/connection';

class CategoriesController{

  async index(request: Request, response: Response) {
    const categories = await knex('tb_categories').select('*');    
    return response.json(categories);  
  }

}

export default CategoriesController;