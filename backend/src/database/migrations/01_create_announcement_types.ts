import Knex from 'knex';

export async function up(knex: Knex){
  return knex.schema.createTable('tb_announcement_types', table => {
    table.increments('id').primary();
    table.string('type').notNullable(); 
  })
};

export async function down(knex: Knex){
  return knex.schema.dropTable('tb_announcement_types');
};

