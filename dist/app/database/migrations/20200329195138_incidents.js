"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } }

 async function up (knex) {
  await knex.schema.createTable('incidents', (table) => {
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
} exports.up = up;

 async function down (knex) {
  await knex.schema.dropTable('incidents')
} exports.down = down;
