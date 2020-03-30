import bcrypt from 'bcrypt'

import { OngInterface } from '../interfaces/OngInterface'

export const hashcrate = (
  password: OngInterface
):Promise<any> => {
  const passwordHash = bcrypt.hash(password, 8)

  return passwordHash
}

export const compareHash = (
  password: OngInterface,
  hashPassord
): Promise<any> => {
  const compare = bcrypt.compare(password, hashPassord)
  return compare
}
