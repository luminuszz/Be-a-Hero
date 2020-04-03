/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable camelcase */
import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'

import { authConfig } from '../config/auth'
import { connect } from '../database/connection'
import { IncidentInterface } from '../interfaces/IncidentInterface'
class ProfilerController {
  async index (req: Request, res: Response): Promise<Response> {
    const authToken = req.headers.authorization
    const [, token] = authToken.split(' ')
    const { id } = await jwt.decode(token, authConfig.secret)
    const incidents = await connect<IncidentInterface>('incidents')
      .where('ong_id', id)
      .select('*')

    return res.json(incidents)
  }
}
export default new ProfilerController()
