import { Router } from 'express'

import IncidentController from './app/controllers/IncidentController'
import ProfilerController from './app/controllers/ProfilerController'
import SessionController from './app/controllers/SessionController'
import UserController from './app/controllers/UserController'
import { tokenValidate } from './app/middlewares/auth'
const routes = Router()

routes.post('/login', SessionController.store)
routes.post('/createongs', UserController.store)
routes.use(tokenValidate)

// GET
routes.get('/ongs', UserController.index)
routes.get('/incidents', IncidentController.index)
routes.get('/profile', ProfilerController.index)
// POST
routes.post('/incidents', IncidentController.store)
// Delete
routes.delete('/incidents/:id', IncidentController.delete)
export default routes
