"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _bcrypt = require('bcrypt'); var _bcrypt2 = _interopRequireDefault(_bcrypt);



 const hashcrate = (
  password
) => {
  const passwordHash = _bcrypt2.default.hash(password, 8)

  return passwordHash
}; exports.hashcrate = hashcrate

 const compareHash = (
  password,
  hashPassord
) => {
  const compare = _bcrypt2.default.compare(password, hashPassord)
  return compare
}; exports.compareHash = compareHash
