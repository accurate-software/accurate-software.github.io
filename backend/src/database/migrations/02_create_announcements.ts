import Knex from 'knex';

export async function up(knex: Knex){
  return knex.schema.createTable('tb_announcements', table => {
    table.increments('id').primary();
    table.string('category').notNullable();  
    table.text('description').notNullable();      
    table.string('email').notNullable();    
    table.float('latitude').notNullable();  
    table.float('longitude').notNullable();  
    table.string('name').notNullable();  
    table.string('phone').notNullable();  
    table.string('photo').notNullable();  
    table.integer('reward').notNullable();
    table.string('reward_value');  
    table.integer('type').notNullable();
    table.dateTime('insert_in').notNullable().defaultTo(knex.fn.now());
    table.dateTime('updated_at').notNullable().defaultTo(knex.fn.now());
    table.string('uf').notNullable();
    table.string('city').notNullable();
    table.integer('code_conclusion').nullable().unique();
    table.string('description_conclusion').nullable(); 
  })
};

export async function down(knex: Knex){
  return knex.schema.dropTable('tb_announcements');
};

