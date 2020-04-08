/* eslint-disable no-undef */
import knex from 'knex'
import postgres from 'pg'

import { databaseConfig } from '../config/database'

const config = process.env.NODE_ENV === 'test' ? databaseConfig.test
  : databaseConfig.development
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
postgres.defaults.ssl = true
export const connect = knex(config)
