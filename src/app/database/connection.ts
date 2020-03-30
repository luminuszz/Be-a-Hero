/* eslint-disable no-undef */
import knex from 'knex'

import { databaseConfig } from '../config/database'
export const connect = knex(databaseConfig)
