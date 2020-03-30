import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'

import { authConfig } from '../config/auth'
import { connect } from '../database/connection'
import { OngInterface } from '../interfaces/OngInterface'
import { compareHash } from '../providers/User'
class SessionController {
  async store (req: Request, res: Response):Promise<Response> {
    const { id, password } = req.body

    const ongs = await connect<OngInterface>('ongs')
      .where('id', id)
      .select('password', 'id', 'name', 'email')
      .first()

    if (!ongs) {
      return res.status(400).json({ message: 'Ongs does not exists' })
    }

    if (!(await compareHash(password, ongs.password))) {
      return res.status(400).json({ message: 'Invalid password' })
    }
    return res.json({
      user: {
        email: ongs.email,
        name: ongs.name
      },
      token: jwt.sign({ id: ongs.id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn
      })
    })
  }
}

export default new SessionController()
