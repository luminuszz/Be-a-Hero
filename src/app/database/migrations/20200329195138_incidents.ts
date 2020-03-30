import * as Knex from 'knex'

export async function up (knex: Knex): Promise<any> {
  await knex.schema.createTable('incidents', (table: Knex.TableBuilder) => {
    table.increments().primary()

    table.string('title').notNullable()
    table.string('description').notNullable()
    table.decimal('value').notNullable()

    table.string('ong_id').notNullable()

    table
      .foreign('ong_id')
      .references('id')
      .inTable('ongs')

    table.timestamp('created_at').notNullable()
  })
}

export async function down (knex: Knex): Promise<any> {
  await knex.schema.dropTable('incidents')
}
