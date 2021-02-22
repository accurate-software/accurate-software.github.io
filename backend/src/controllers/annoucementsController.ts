import {Request, Response} from 'express';
import Knex from 'knex';
import knex from '../database/connection';

class AnnoucementsController{

  async index(request: Request, response: Response) {
    const {city, uf, category,description} = request.query;


    const data = await knex('tb_announcements')
      .join('tb_announcement_types','tb_announcements.type', '=', 'tb_announcement_types.id')   
      .join('tb_categories','tb_announcements.category', '=', 'tb_categories.id')      
      .where('city',String(city))
      .where('uf',String(uf))
      .where('tb_announcements.category',String(category))
      .where('description','LIKE',`%${String(description)}%` )
      // .where('tb_announcements.type',1)
      .distinct()
      .column(
        'tb_announcements.id',
        'tb_announcements.city',
        'tb_announcements.uf',
        'tb_announcements.description',
        'tb_announcements.email',
        'tb_announcements.latitude',
        'tb_announcements.longitude',
        'tb_announcements.name',
        'tb_announcements.phone',
        'tb_announcements.photo',
        'tb_announcements.reward',
        'tb_announcements.reward_value',
        'tb_announcements.insert_in',
        'tb_announcements.updated_at',
        'tb_announcement_types.type',
        'tb_categories.category',
      )
      .select()

      return response.json({
        data
      })
  }

  async listHome(request: Request, response: Response) {
    const { type } = request.params;

    

    const list = await knex('tb_announcements')   
    .join('tb_categories','tb_announcements.category', '=', 'tb_categories.id')    
    .join('tb_announcement_types','tb_announcements.type', '=', 'tb_announcement_types.id')    
    .where('tb_announcements.type',String(type))   
    .column(
      'tb_announcements.id',
      'tb_announcements.city',
      'tb_announcements.description',   
      'tb_announcements.photo',
      'tb_announcements.reward',   
      'tb_announcements.insert_in',
      'tb_announcements.updated_at',  
      'tb_categories.category',
      'tb_announcement_types.type'
    )
    .select().limit(3).orderBy('tb_announcements.insert_in', 'desc')


     


    return response.json(list);
  }

  async show(request: Request, response: Response){
    const { type, id } = request.params;

    const announcement = await knex('tb_announcements')   
    .join('tb_categories','tb_announcements.category', '=', 'tb_categories.id')    
    .join('tb_announcement_types','tb_announcements.type', '=', 'tb_announcement_types.id')    
    .where('tb_announcement_types.type',String(type))   
    .where('tb_announcements.id',Number(id))  
    .column(
      'tb_announcements.id',
      'tb_announcements.city',
      'tb_announcements.uf',
      'tb_announcements.description',
      'tb_announcements.email',
      'tb_announcements.latitude',
      'tb_announcements.longitude',
      'tb_announcements.name',
      'tb_announcements.phone',
      'tb_announcements.photo',
      'tb_announcements.reward',
      'tb_announcements.reward_value',
      'tb_announcements.insert_in',
      'tb_announcements.updated_at',

      'tb_announcement_types.type',
      'tb_categories.category',
    )  
    .select()


    return response.json(announcement);
  }

  async create(request: Request, response: Response) {
    const {
      type,
      name,
      email,
      phone,
      category,
      description,
      photo,
      reward,
      reward_value,
      latitude,
      longitude,
      city,
      uf
    } = request.body;   

    const trx = await knex.transaction();

    const data = {
      type,
      name,
      email,
      phone,
      category,
      description,
      photo: 'http://192.168.0.6:3333/uploads/default_photo.jpg',
      reward,
      reward_value,
      latitude,
      longitude,
      city,
      uf,
      code_conclusion: Math.floor(Math.random() * 9999)
    };

    const insertedReg = await trx('tb_announcements').insert(data); 

    await trx.commit();

    return response.json({     
      ...data,     
    });  
    
  }

  async count(request: Request, response: Response){

    const announcement = await knex('tb_announcements') 
      .select(knex.raw(
        `sum(CASE  WHEN type = 1  THEN 1 ELSE 0  END) achados,
        sum(CASE  WHEN type = 2  THEN 1 ELSE 0  END) perdidos,
        sum(CASE  WhEN type = 3  THEN 1 ELSE 0  END) concluidos`
      ));  
   
    return response.json(announcement);
  }

  async finish(request: Request, response: Response) {
    const {
      id,
      code_conclusion,
      description_conclusion,     
    } = request.body;   

    const trx = await knex.transaction();


    var data = {'message':''};

    await trx('tb_announcements')
      .where("id", id)
      .where("code_conclusion",code_conclusion)
      .update({
        description_conclusion: description_conclusion,
        type: 3
      }).on('query-error', function(error:string, obj:object) {
        data.message = error;             
      })
      .then(function(resp ) {        
        data.message = resp.toString();
       })
      .catch(console.error);

    await trx.commit()        

    return response.json({     
      data   
    });  
    
  }

}

export default AnnoucementsController;