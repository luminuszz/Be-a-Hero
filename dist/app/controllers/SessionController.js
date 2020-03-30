"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _auth = require('../config/auth');
var _connection = require('../database/connection');

var _User = require('../providers/User');
class SessionController {
  async store (req, res) {
    const { id, password } = req.body

    const ongs = await _connection.connect('ongs')
      .where('id', id)
      .select('password', 'id', 'name', 'email')
      .first()

    if (!ongs) {
      return res.status(400).json({ message: 'Ongs does not exists' })
    }

    if (!(await _User.compareHash.call(void 0, password, ongs.password))) {
      return res.status(400).json({ message: 'Invalid password' })
    }
    return res.json({
      user: {
        email: ongs.email,
        name: ongs.name
      },
      token: _jsonwebtoken2.default.sign({ id: ongs.id }, _auth.authConfig.secret, {
        expiresIn: _auth.authConfig.expiresIn
      })
    })
  }
}

exports. default = new SessionController()
