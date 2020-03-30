"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } }/* eslint-disable no-undef */


 async function up (knex) {
  await knex.schema.createTable('ongs', (table) => {
    table.string('id').primary()
    table.string('name').notNullable()
    table.string('password').notNullable()
    table.string('email').notNullable()
    table.string('whatsapp').notNullable()
    table.string('city').notNullable()
    table.string('uf', 2).notNullable()
    table.timestamp('created_at').notNullable()
  })
} exports.up = up;

 async function down (knex) {
  await knex.schema.dropTable('ongs')
} exports.down = down;
