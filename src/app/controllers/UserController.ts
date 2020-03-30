/* eslint-disable @typescript-eslint/camelcase */
import crypto from 'crypto'
import { Request, Response } from 'express'
import moment from 'moment'

import { connect } from '../database/connection'
import { OngInterface } from '../interfaces/OngInterface'
import { hashcrate } from '../providers/User'

class UserController {
  async index (req: Request, res: Response): Promise<Response> {
    const ongs = await connect('ongs').select('*')
    return res.json(ongs)
  }

  async store (req: Request, res: Response): Promise<Response> {
    const { name, email, whatsapp, city, uf } = req.body

    const id = await crypto.randomBytes(4).toString('HEX')

    const password = await hashcrate(req.body.password)

    await connect<OngInterface>('ongs').insert({
      id,
      name,
      password,
      email,
      whatsapp,
      city,
      uf,
      created_at: moment().format()
    })

    return res.json({ id })
  }
}

export default new UserController()
