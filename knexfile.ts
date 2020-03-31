/* eslint-disable no-unused-expressions */
import pg from 'pg'

import { databaseConfig } from './src/app/config/database'
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
pg.defaults.ssl = true

module.exports = databaseConfig
