/* eslint-disable @typescript-eslint/no-namespace */

import { Request, Response, NextFunction } from 'express'

import { JwtServices } from '../providers/jwt'

export const tokenValidate = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response> => {
  const jwt = new JwtServices()
  const auth = req.headers.authorization

  if (!auth) {
    return res.status(401).json({ message: 'Not authorized' })
  }

  try {
    const response = jwt.jwtVerify(auth)
    console.log(response)
    next()
  } catch (error) {
    res.status(401).json({ message: 'Token invalid' })
  }
}
