"use strict";Object.defineProperty(exports, "__esModule", {value: true}); const databaseConfig = {
  client: 'sqlite3',
  connection: {
    filename: 'db.sqlite'
  },
  migrations: {
    directory: 'src/app/database/migrations'
  },

  useNullAsDefault: true
}; exports.databaseConfig = databaseConfig
// eslint-disable-next-line no-unused-vars
