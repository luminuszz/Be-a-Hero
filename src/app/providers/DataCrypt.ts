import bcrypt from 'bcrypt'
import crypto from 'crypto'

import { DataCryptInterface } from '../interfaces/ProvidersIterface'

class DataCrypt implements DataCryptInterface {
  public randonId ():string {
    const response = crypto.randomBytes(4).toString('HEX')
    return response
  }

  public async hashCreate (password:string):Promise<string> {
    const passwordHash = bcrypt.hash(password, 8)

    return passwordHash
  }

  public async compareHash (password:string, hashPassord:string):Promise<boolean> {
    const compare = bcrypt.compare(password, hashPassord)

    return compare
  }
}

export default new DataCrypt()
