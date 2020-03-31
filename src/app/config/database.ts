/* eslint-disable no-unused-expressions */
export const databaseConfig = {
  client: 'pg',
  connection: {
    host: 'ec2-18-235-97-230.compute-1.amazonaws.com',
    user: 'ikjkkpwypyxmlw',
    password: '548f8c5c89b6228e387439d891ecaea9a74c27738ee0cecfc8900d5445cf509d',
    database: 'd5vtrq1jomf8lc',
    port: 5432
  },

  migrations: {
    directory: 'src/app/database/migrations'
  },

  useNullAsDefault: true

}
