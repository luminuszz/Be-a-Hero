export const databaseConfig = {
  client: 'sqlite3',
  connection: {
    filename: 'db.sqlite'
  },
  migrations: {
    directory: 'src/app/database/migrations'
  },

  useNullAsDefault: true
}
// eslint-disable-next-line no-unused-vars
