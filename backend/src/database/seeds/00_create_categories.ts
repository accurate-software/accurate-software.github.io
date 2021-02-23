import Knex from 'knex';

export async function seed(knex:Knex) {
  await knex('tb_categories').insert([
    {category: 'Animal'},
    {category: 'Documento'},
    {category: 'Veiculo'},
    {category: 'Eletrônico'},
    {category: 'Outros'},
  ]);
}