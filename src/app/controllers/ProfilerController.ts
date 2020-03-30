/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable camelcase */
import { Request, Response } from 'express'

import { connect } from '../database/connection'
import { IncidentInterface } from '../interfaces/IncidentInterface'

class ProfilerController {
  async index (req: Request, res: Response): Promise<Response> {
    const ong_id = req.headers.authorization

    const incidents = await connect<IncidentInterface>('incidents')
      .where('ong_id', ong_id)
      .select('*')

    return res.json(incidents)
  }
}
export default new ProfilerController()
