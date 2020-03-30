/* eslint-disable no-undef */
import * as Knex from 'knex'

export async function up (knex: Knex): Promise<any> {
  await knex.schema.createTable('ongs', (table: Knex.TableBuilder) => {
    table.string('id').primary()
    table.string('name').notNullable()
    table.string('password').notNullable()
    table.string('email').notNullable()
    table.string('whatsapp').notNullable()
    table.string('city').notNullable()
    table.string('uf', 2).notNullable()
    table.timestamp('created_at').notNullable()
  })
}

export async function down (knex: Knex): Promise<any> {
  await knex.schema.dropTable('ongs')
}
