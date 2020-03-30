"use strict";Object.defineProperty(exports, "__esModule", {value: true});/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable camelcase */


var _connection = require('../database/connection');


class ProfilerController {
  async index (req, res) {
    const ong_id = req.headers.authorization

    const incidents = await _connection.connect('incidents')
      .where('ong_id', ong_id)
      .select('*')

    return res.json(incidents)
  }
}
exports. default = new ProfilerController()
