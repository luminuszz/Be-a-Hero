"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable no-undef */
var _knex = require('knex'); var _knex2 = _interopRequireDefault(_knex);

var _database = require('../config/database');
 const connect = _knex2.default.call(void 0, _database.databaseConfig); exports.connect = connect
