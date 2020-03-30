"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable @typescript-eslint/camelcase */
var _crypto = require('crypto'); var _crypto2 = _interopRequireDefault(_crypto);

var _moment = require('moment'); var _moment2 = _interopRequireDefault(_moment);

var _connection = require('../database/connection');

var _User = require('../providers/User');

class UserController {
  async index (req, res) {
    const ongs = await _connection.connect.call(void 0, 'ongs').select('*')
    return res.json(ongs)
  }

  async store (req, res) {
    const { name, email, whatsapp, city, uf } = req.body

    const id = await _crypto2.default.randomBytes(4).toString('HEX')

    const password = await _User.hashcrate.call(void 0, req.body.password)

    await _connection.connect('ongs').insert({
      id,
      name,
      password,
      email,
      whatsapp,
      city,
      uf,
      created_at: _moment2.default.call(void 0, ).format()
    })

    return res.json({ id })
  }
}

exports. default = new UserController()
