"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/camelcase */

var _moment = require('moment'); var _moment2 = _interopRequireDefault(_moment);

var _connection = require('../database/connection');

class UserController {
  async index (req, res) {
    const [count] = await _connection.connect('incidents')
      .count()

    const { page = 1 } = req.query
    const incidents = await _connection.connect('incidents')
      .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
      .limit(5)
      .offset((page - 1) * 5)
      .select(['incidents.*',
        'ongs.name', 'ongs.email',
        'ongs.whatsapp',
        'ongs.city',
        'ongs.uf'])

    res.header('X-Total-Count', count['count(*)'])

    return res.json(incidents)
  }

  async store (req, res) {
    const { title, description, value } = req.body
    const ong_id = req.headers.authorization
    const [id] = await _connection.connect('incidents').insert({
      title,
      description,
      value,
      ong_id,
      created_at: _moment2.default.call(void 0, ).format()
    })
    return res.json({ id })
  }

  async delete (req, res) {
    const { id } = req.params
    const ong_id = req.userId

    const incidents = await _connection.connect('incidents')
      .where('id', id)
      .select('ong_id')
      .first()

    if (incidents.ong_id !== ong_id) {
      return res.status(401).json({ messege: 'not authorization' })
    }
    await _connection.connect('incidents')
      .where('id', id)
      .delete()

    return res.status(204).send()
  }
}

exports. default = new UserController()
