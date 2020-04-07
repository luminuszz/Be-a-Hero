import { Request, Response } from 'express'

import { connect } from '../database/connection'
import { OngInterface } from '../interfaces/OngInterface'
import { SessionInterface } from '../interfaces/SessionInterface'
import DataCrypt from '../providers/DataCrypt'
import { JwtToken } from '../providers/jwt'
import { sessionSchema } from '../validators/Session'
class SessionController implements SessionInterface {
  async store (req: Request, res: Response): Promise<Response> {
    const jwt = new JwtToken()
    if (!(await sessionSchema.isValid(req.body))) {
      return res.status(400).json('Campos Invalidos')
    }
    const { id, password } = req.body

    const ongs = await connect<OngInterface>('ongs')
      .where('id', id)
      .select('password', 'id', 'name', 'email')
      .first()

    if (!ongs) {
      return res.status(400).json({ message: 'Ongs does not exists' })
    }

    if (!(await DataCrypt.compareHash(password, ongs.password))) {
      return res.status(400).json({ message: 'Invalid password' })
    }

    return res.json({
      user: {
        email: ongs.email,
        name: ongs.name
      },
      token: jwt.store(id)
    })
  }
}

export default new SessionController()
