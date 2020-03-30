"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

var _IncidentController = require('./app/controllers/IncidentController'); var _IncidentController2 = _interopRequireDefault(_IncidentController);
var _ProfilerController = require('./app/controllers/ProfilerController'); var _ProfilerController2 = _interopRequireDefault(_ProfilerController);
var _SessionController = require('./app/controllers/SessionController'); var _SessionController2 = _interopRequireDefault(_SessionController);
var _UserController = require('./app/controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _auth = require('./app/middlewares/auth');
const routes = _express.Router.call(void 0, )

routes.post('/login', _SessionController2.default.store)
routes.post('/createongs', _UserController2.default.store)
routes.use(_auth.tokenValidate)

// GET
routes.get('/ongs', _UserController2.default.index)
routes.get('/incidents', _IncidentController2.default.index)
routes.get('/profile', _ProfilerController2.default.index)
// POST
routes.post('/incidents', _IncidentController2.default.store)
// Delete
routes.delete('/incidents/:id', _IncidentController2.default.delete)
exports. default = routes
