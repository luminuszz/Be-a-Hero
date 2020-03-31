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

  test: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/test.sqlite'
    },
    migrations: {
      directory: './src/database/migrations'
    },
    useNullAsDefault: true
  },
  staging: {
    client: 'postgresql',
    connection: {
      host: '127.0.0.1',
      database: 'staging',
      user: 'postgres',
      password: 'postgres'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './src/database/migrations'
    }
  },

  production: {
    client: 'postgres',
    connection: 'postgres://ikjkkpwypyxmlw:548f8c5c89b6228e387439d891ecaea9a74c27738ee0cecfc8900d5445cf509d@ec2-18-235-97-230.compute-1.amazonaws.com:5432/d5vtrq1jomf8lc',
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: 'src/app/database/migrations'
    }
  }

}
