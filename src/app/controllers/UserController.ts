/* eslint-disable @typescript-eslint/camelcase */
import { Request, Response } from 'express'
import moment from 'moment'

import { connect } from '../database/connection'
import { OngInterface } from '../interfaces/OngInterface'
import DataCrypt from '../providers/DataCrypt'
import { userStoreSchema } from '../validators/User'

class UserController {
  public async index (req: Request, res: Response): Promise<Response> {
    const ongs = await connect('ongs').select('*')
    return res.json(ongs)
  }

  public async store (req: Request, res: Response): Promise<Response> {
    if (!(await userStoreSchema.isValid(req.body))) {
      return res.status(400).json({ message: 'Campos inválidos' })
    }
    const { name, email, whatsapp, city, uf } = req.body
    const id = DataCrypt.randonId()
    const password = await DataCrypt.hashCreate(req.body.password)
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
