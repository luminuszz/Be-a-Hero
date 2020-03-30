"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable @typescript-eslint/no-namespace */


var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _auth = require('../config/auth');

 const tokenValidate = async (
  req,
  res,
  next
) => {
  const auth = req.headers.authorization

  if (!auth) {
    return res.status(401).json({ message: 'Not authorized' })
  }
  const [, token] = auth.split(' ')

  try {
    const response = _jsonwebtoken2.default.verify(token, _auth.authConfig.secret)
    req.userId = response.id

    next()
  } catch (error) {
    console.log(error)
    res.status(401).json({ message: 'Token invalid' })
  }
}; exports.tokenValidate = tokenValidate
