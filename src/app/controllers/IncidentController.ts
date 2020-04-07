/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/camelcase */
import { Request, Response } from 'express'
import moment from 'moment'

import { connect } from '../database/connection'
import { IncidentInterface, IncidentControllerInterface } from '../interfaces/IncidentInterface'
import { JwtToken } from '../providers/jwt'
import { incidentStoreSchema } from '../validators/Incidents'
class IndicenteController implements IncidentControllerInterface {
  async index (req: Request, res: Response): Promise<Response> {
    const [count] = await connect<IncidentInterface>('incidents').count()

    const { page = 1 } = req.query
    const incidents = await connect<IncidentInterface>('incidents')
      .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
      .limit(5)
      .offset((page - 1) * 5)
      .select([
        'incidents.*',
        'ongs.name',
        'ongs.email',
        'ongs.whatsapp',
        'ongs.city',
        'ongs.uf'
      ])

    res.header('X-Total-Count', count['count(*)'])

    return res.json(incidents)
  }

  async store (req: Request, res: Response): Promise<Response> {
    const jwt = new JwtToken()
    if (!incidentStoreSchema.isValid(req.body)) {
      return res.status(400).json('Campos inválidos')
    }
    const { title, description, value } = req.body
    const authToken = req.headers.authorization

    const { id } = jwt.jwtVerify(authToken)
    const response = await connect<IncidentInterface>('incidents').insert({
      title,
      description,
      value,
      ong_id: id,
      created_at: moment().format()
    })
    return res.json(response)
  }

  async delete (req: Request, res: Response): Promise<Response> {
    const jwt = new JwtToken()
    const { id } = req.params
    const authToken = req.headers.authorization
    const { id: ong_id } = jwt.jwtVerify(authToken)
    const incidents = await connect<IncidentInterface>('incidents')
      .where('id', id)
      .select('ong_id')
      .first()
    console.log(incidents)

    if (incidents.ong_id !== ong_id) {
      return res.status(401).json({ messege: 'not authorization' })
    }
    await connect<IncidentInterface>('incidents')
      .where('id', id)
      .delete()

    return res.status(204).send()
  }
}

export default new IndicenteController()
