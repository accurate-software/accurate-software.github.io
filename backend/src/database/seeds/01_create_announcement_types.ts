import Knex from 'knex';

export async function seed(knex:Knex) {
  await knex('tb_announcement_types').insert([
    {id: 1, type: 'Achado'},
    {id: 2, type: 'Perdido'},
    {id: 3, type: 'Recuperado'}, 
  ]);
}