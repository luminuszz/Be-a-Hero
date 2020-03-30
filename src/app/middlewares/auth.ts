/* eslint-disable @typescript-eslint/no-namespace */

import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

import { authConfig } from '../config/auth'

export const tokenValidate = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response> => {
  const auth = req.headers.authorization

  if (!auth) {
    return res.status(401).json({ message: 'Not authorized' })
  }
  const [, token] = auth.split(' ')

  try {
    const response:any = jwt.verify(token, authConfig.secret)
    req.userId = response.id

    next()
  } catch (error) {
    console.log(error)
    res.status(401).json({ message: 'Token invalid' })
  }
}
