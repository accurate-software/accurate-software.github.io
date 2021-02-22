import Knex from 'knex';

export async function up(knex: Knex){
  return knex.schema.createTable('tb_categories', table => {
    table.increments('id').primary();
    table.string('category').notNullable();    
  })
};

export async function down(knex: Knex){
  return knex.schema.dropTable('tb_categories');
};

